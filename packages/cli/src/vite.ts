import path from 'path';
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { debug as createDebug } from 'debug';
import {
  Plugin,
  UserConfig,
  mergeConfig,
  loadConfigFromFile,
  build,
  createServer,
  normalizePath,
  searchForWorkspaceRoot
} from 'vite';

import type { CoBookCliOption } from './types';
import { ensurePrefix } from './utils';
import { RawBuildOptions, RawDevOptions } from './options';

const debug = createDebug('cobook:cli');

export async function resolveViteOption(option: CoBookCliOption) {
  if (existsSync(path.join(option.root, 'index.html'))) {
    const clientViteConfig = await loadConfigFromFile(
      { command: option.mode === 'dev' ? 'serve' : 'build', mode: option.mode },
      path.join(option.clientRoot, 'vite.config.ts'),
      option.clientRoot
    );

    const config: UserConfig = {
      root: option.root,
      publicDir: path.join(option.root, 'public'),
      server: {
        fs: {
          allow: [searchForWorkspaceRoot(option.clientRoot)]
        }
      },
      optimizeDeps: {
        include: ['pinia', 'pinia-plugin-persistedstate']
      }
    };

    return mergeConfig(config, clientViteConfig.config);
  } else {
    return {
      root: option.clientRoot
    };
  }
}

export async function createViteServer(option: CoBookCliOption, rawOptions: RawDevOptions) {
  const server = await createServer(
    mergeConfig(
      {
        logLevel: 'warn',
        plugins: [createPlugin(option)],
        optimizeDeps: {
          entries: [path.join(option.clientRoot, 'src/main.ts')]
        }
      },
      await resolveViteOption(option)
    )
  );
  return server;
}

export async function buildVite(option: CoBookCliOption, rawOptions: RawBuildOptions) {
  const indexPath = path.resolve(option.root, 'index.html');
  let originalIndexHTML: string | undefined;
  if (existsSync(indexPath)) {
    originalIndexHTML = readFileSync(indexPath, 'utf-8');
  }
  writeFileSync(indexPath, await getIndexHtml(option), 'utf-8');

  try {
    await build(
      mergeConfig(
        {
          build: {
            emptyOutDir: rawOptions.emptyOutDir,
            outDir: rawOptions.outDir
          },
          plugins: [createPlugin(option)]
        },
        await resolveViteOption(option)
      )
    );
  } finally {
    if (originalIndexHTML != null) {
      writeFileSync(indexPath, originalIndexHTML, 'utf-8');
    } else {
      unlinkSync(indexPath);
    }
  }
}

function createPlugin(option: CoBookCliOption): Plugin {
  return {
    name: 'cobook:config',
    enforce: 'pre',
    config(config) {
      // @ts-ignore
      config.cobook = option;
    },
    configResolved(config) {
      debug(config);
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (req.url!.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(await getIndexHtml(option));
            return;
          }
          next();
        });
      };
    }
  };
}

async function getIndexHtml(option: CoBookCliOption) {
  const indexPath = path.resolve(option.root, 'index.html');
  const indexHTML = existsSync(indexPath)
    ? readFileSync(indexPath, 'utf-8')
    : readFileSync(path.join(option.clientRoot, 'index.html'), 'utf-8');
  const mainPath = path.join(option.clientRoot, 'src/main.ts');
  return indexHTML.replace('__ENTRY__', `/@fs${ensurePrefix('/', normalizePath(mainPath))}`);
}
