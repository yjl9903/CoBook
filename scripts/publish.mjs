#!/usr/bin/env zx

await fs.copy('./packages/app', './packages/cli/app', {
  filter(p) {
    return /node_modules|\\dist\\/.test(p);
  }
});

await $`pnpm publish -r --access public`;

await fs.remove('./packages/cli/app');
