#!/usr/bin/env zx

await fs.copy('./packages/client', './packages/cli/client', {
  filter(p) {
    return !/node_modules|dist|tsconfig|README|git|package\.json/.test(p);
  }
});

await fs.copy('./packages/worker/dist', './packages/cli/worker');

await $`pnpm publish -r --access public`;

await fs.remove('./packages/cli/client');

await fs.remove('./packages/cli/worker');
