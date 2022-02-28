<script setup lang="ts">
import { ref } from 'vue';
import { List } from 'vant';
import format from 'date-fns/format';

import { useAccountStore } from '@/logic/account';

import Editor from './Editor.vue';

const store = useAccountStore();

store.init();

const currentEdit = ref();
</script>

<template>
  <van-cell-group inset>
    <List>
      <van-cell
        v-for="item in store.accounts.slice().reverse()"
        :key="item.timestamp"
        clickable
        @click="currentEdit = item"
      >
        <div flex justify="between" items="center">
          <span>
            <span inline-block mr="2" text="gray-400">{{
              format(new Date(item.timestamp), 'yyyy-MM-dd hh:mm')
            }}</span>
            <Category :category="item.category"></Category>
          </span>
          <span>￥ {{ item.amount }}</span>
        </div>
      </van-cell>
    </List>

    <Editor :account="currentEdit" @close="currentEdit = undefined"></Editor>
  </van-cell-group>
</template>

<style>
.van-action-sheet__header {
  font-weight: bold;
}
</style>
