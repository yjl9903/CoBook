<script setup lang="ts">
import { computed } from 'vue';
import { Tag as VanTag } from 'vant';

import { TagItem } from '@cobook/shared';

import { categories } from '~cobook';

const props = defineProps<{ category: string | TagItem }>();
const tag = computed(() => {
  if (typeof props.category === 'string') {
    return {
      name: props.category,
      color: categories.find((c) => c.name === props.category)?.color ?? '#F2F3F5'
    };
  } else {
    return props.category;
  }
});
</script>

<template>
  <van-tag :color="tag.color">
    <slot>{{ tag.name }}</slot>
  </van-tag>
</template>
