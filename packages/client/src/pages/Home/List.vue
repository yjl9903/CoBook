<script setup lang="ts">
import { ref } from 'vue';
import { List as VanList } from 'vant';
import format from 'date-fns/format';

import type { AccountItem } from '@cobook/shared';

import Editor from './Editor.vue';

defineProps<{ accounts: AccountItem[]; formatText?: string }>();

const currentEdit = ref();

const isInlineDescription = (d?: string) => {
  if (d) {
    return d.length <= 10 && d.replace(/[^\n]/g, '').length === 0;
  } else {
    return false;
  }
};
</script>

<template>
  <van-cell-group inset>
    <van-list>
      <van-cell
        v-for="item in accounts.slice().reverse()"
        :key="item.timestamp"
        clickable
        @click="currentEdit = item"
      >
        <div flex justify="between" items="center">
          <span inline-flex items="center">
            <span inline-block mr="2" text="gray-400">{{
              format(new Date(item.timestamp), formatText ?? 'yyyy-MM-dd HH:mm')
            }}</span>
            <Category :category="item.category"></Category>
            <span ml="2" v-if="isInlineDescription(item.description)">{{ item.description }}</span>
          </span>
          <span font="mono">￥{{ item.amount }}</span>
        </div>
      </van-cell>
    </van-list>

    <Editor :account="currentEdit" @close="currentEdit = undefined"></Editor>
  </van-cell-group>
</template>

<style>
.van-action-sheet__header {
  font-weight: bold;
}
</style>
