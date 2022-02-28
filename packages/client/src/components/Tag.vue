<script setup lang="ts">
import { computed } from 'vue';
import { Tag as VanTag } from 'vant';

import { TagItem } from '@cobook/shared';

import { tags } from '~cobook';

const props = defineProps<{ tag: string | TagItem }>();
const tag = computed(() => {
  if (typeof props.tag === 'string') {
    return {
      name: props.tag,
      color: tags.find((c) => c.name === props.tag)?.color ?? '#F2F3F5'
    };
  } else {
    return props.tag;
  }
});
</script>

<template>
  <van-tag :color="tag.color">
    <slot>{{ tag.name }}</slot>
  </van-tag>
</template>
