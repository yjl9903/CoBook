import path from 'path';
import { cac } from 'cac';
import { blue, bold, cyan, dim, lightRed, lightYellow } from 'kolorist';
import { debug as createDebug } from 'debug';

import { version } from '../package.json';

import { RawBuildOptions, RawDevOptions, resolveOption } from './options';
import { findFreePort, findRemoteHost } from './utils';
import { initWorker, publishWorker } from './worker';
import { buildVite, createViteServer } from './vite';

const cli = cac('cobook');

const debug = createDebug('cobook:cli');

cli
  .command('build [root]')
  .option('--emptyOutDir', "force empty outDir when it's outside of root", {
    default: false
  })
  .option('--outDir <dir>', 'output directory', { default: path.join(process.cwd(), './dist') })
  .action(async (root: string | undefined, rawOptions: RawBuildOptions) => {
    const options = await resolveOption('prod', root);
    await buildVite(options, rawOptions);
  });

cli
  .command('dev [root]')
  .option('--host', 'specify hostname')
  .option('--port <port>', 'port to listen to', { default: 3000 })
  .action(async (root: string | undefined, rawOptions: RawDevOptions) => {
    const options = await resolveOption('dev', root);

    const vitePort = await findFreePort(rawOptions.port);
    const workerPort = await findFreePort(vitePort + 1);

    const worker = await initWorker(workerPort, options);

    const viteServer = await createViteServer(options, rawOptions);

    await viteServer.listen(vitePort);
    await worker.startServer();

    printDevInfo(vitePort, workerPort, rawOptions.host);
  });

cli.command('worker [root]').action(async (root: string | undefined) => {
  const options = await resolveOption('prod', root);
  await publishWorker(options);
});

function printDevInfo(vitePort: number, workerPort: number, host?: string | boolean) {
  console.log();
  console.log(`${bold('  CoBook')} ${cyan(`v${version}`)}`);
  console.log();

  console.log(`${dim('  Local    ')} > ${cyan(`http://localhost:${bold(vitePort)}/`)}`);
  if (host) {
    for (const { address } of findRemoteHost()) {
      console.log(`${dim('  Remote   ')} > ${blue(`http://${address}:${vitePort}/`)}`);
    }
  } else {
    console.log(`${dim('  Remote   ')} > ${dim('pass --host to enable')}`);
  }

  console.log(`${dim('  Worker   ')} > ${cyan(`http://localhost:${bold(workerPort)}/`)}`);

  console.log();
}

cli.on('command:*', () => {
  console.error(`${lightRed('Invalid command:')} cobook ${cli.args.join(' ')}`);
  process.exit(1);
});

cli.help();

cli.version(version);

async function bootstrap() {
  const handle = (error: unknown) => {
    if (error instanceof Error) {
      console.error(lightRed('Error: ') + error.message);
    } else {
      console.error(error);
    }
    debug(error);
  };

  process.on('unhandledRejection', (error) => {
    handle(error);
  });

  try {
    cli.parse(process.argv, { run: false });
    await cli.runMatchedCommand();
  } catch (error: unknown) {
    handle(error);
    process.exit(1);
  }
}

bootstrap();
