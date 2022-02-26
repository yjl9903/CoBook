import { RawCoBookConfig, Template, ColorItem, AccountItem } from './types';

export { RawCoBookConfig, Template, ColorItem, AccountItem };

export function transformConfig(config?: RawCoBookConfig) {
  const tags = uniq(
    ...(config?.tags ?? []),
    ...(config?.template?.flatMap((t) => t.tags ?? []) ?? [])
  );
  const categories = uniq(
    ...(config?.categories ?? []),
    ...(config?.template?.flatMap((t) => [t.category] ?? []) ?? [])
  );

  return {
    template: config?.template ?? [],
    tags: transfromColorItem(tags),
    categories: transfromColorItem(categories)
  };
}

function transfromColorItem(items: Array<string | ColorItem>): ColorItem[] {
  const ans: ColorItem[] = [];
  for (const item of items) {
    if (typeof item === 'string') {
      ans.push({
        name: item,
        color: '#F2F3F5'
      });
    } else {
      ans.push(item);
    }
  }
  return ans;
}

function uniq<T>(...arr: T[]): T[] {
  return [...new Set(arr)];
}
