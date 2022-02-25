#!/usr/bin/env zx

await fs.copy('./packages/app', './packages/cli/app', {
  filter(p) {
    return /node_modules|\\dist\\/.test(p);
  }
});

await fs.copy('./packages/worker', './packages/cli/worker/dist');

await $`pnpm publish -r --access public`;

await fs.remove('./packages/cli/app');


await fs.remove('./packages/cli/worker');
