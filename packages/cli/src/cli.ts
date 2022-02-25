import path from 'path';
import { cac } from 'cac';
import { blue, bold, cyan, dim, lightRed } from 'kolorist';
import { build, createServer } from 'vite';

import { version } from '../package.json';

import { RawBuildOptions, RawDevOptions, resolveOptions } from './options';
import { findFreePort, findRemoteHost } from './utils';

const cli = cac('cobook');

cli
  .command('build')
  .option('--emptyOutDir', "force empty outDir when it's outside of root", {
    default: false
  })
  .option('--outDir <dir>', 'output directory', { default: path.join(process.cwd(), './dist') })
  .action(async (rawOptions: RawBuildOptions) => {
    const options = await resolveOptions();

    await build({
      root: options.appRoot,
      build: {
        emptyOutDir: rawOptions.emptyOutDir,
        outDir: rawOptions.outDir
      }
    });
  });

cli
  .command('dev')
  .option('--host', 'specify hostname')
  .option('--port <port>', 'port to listen to', { default: 3000 })
  .action(async (rawOptions: RawDevOptions) => {
    const options = await resolveOptions();

    const port = await findFreePort(rawOptions.port);

    const server = await createServer({
      root: options.appRoot,
      logLevel: 'warn'
    });

    await server.listen(port);

    printDevInfo(port, rawOptions.host);
  });

function printDevInfo(port: number, host?: string | boolean) {
  console.log();
  console.log(`${bold('  CoBook')} ${cyan(`v${version}`)}`);

  if (port) {
    console.log();
    console.log(`${dim('  Local    ')} > ${cyan(`http://localhost:${bold(port)}/`)}`);

    if (host) {
      for (const { address } of findRemoteHost()) {
        console.log(`${dim('  Remote   ')} > ${blue(`http://${address}:${port}/`)}`);
      }
    } else {
      console.log(`${dim('  Remote   ')} > ${dim('pass --host to enable')}`);
    }
  }

  console.log();
}

cli.help();

cli.version(version);

async function bootstrap() {
  try {
    cli.parse(process.argv, { run: false });
    await cli.runMatchedCommand();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(lightRed('Error: ') + error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

bootstrap();
