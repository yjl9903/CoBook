import { RawCoBookConfig, Template, TagItem, CategoryItem, AccountItem } from './types';
import { ColorList } from './constant';
import { random } from './utils';

export * from './client';

export { RawCoBookConfig, Template, TagItem, CategoryItem, AccountItem };

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
    name: config?.name ?? 'CoBook',
    baseURL: config?.wrangler?.url ?? '',
    template: config?.template ?? [],
    tags: transfromTagItem(tags),
    categories: transfromTagItem(categories)
  };
}

function transfromTagItem(items: Array<string | TagItem>): TagItem[] {
  const ans: TagItem[] = [];
  for (const item of items) {
    if (typeof item === 'string') {
      ans.push({
        name: item,
        color: ColorList[random(ColorList.length)]
      });
    } else {
      if (!item.color) {
        item.color = ColorList[random(ColorList.length)];
      }
      ans.push(item);
    }
  }
  return ans;
}

function uniq<T>(...arr: T[]): T[] {
  return [...new Set(arr)];
}
