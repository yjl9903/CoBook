<script setup lang="ts">
import { computed, ref } from 'vue';
import { List, Tag, ActionSheet, Notify } from 'vant';
import format from 'date-fns/format';

import { AccountItem } from '@cobook/shared';

import { useAccountStore } from '@/logic/account';

const store = useAccountStore();

store.init();

const currentEdit = ref();
const showEdit = computed({
  get() {
    return !!currentEdit.value;
  },
  set() {
    currentEdit.value = undefined;
  }
});

const deleteAccount = async (current?: AccountItem) => {
  if (current) {
    await store.delete(current);
    currentEdit.value = undefined;
    Notify({ message: '删除成功', type: 'success' });
  }
};
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
            <Tag>{{ item.category }}</Tag>
          </span>
          <span>￥ {{ item.amount }}</span>
        </div>
      </van-cell>
    </List>

    <action-sheet
      v-model:show="showEdit"
      :title="currentEdit && format(new Date(currentEdit.timestamp), 'yyyy-MM-dd hh:mm')"
      :duration="0.2"
      :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
    >
      <div px="4" pb="8">
        <van-cell-group v-if="currentEdit">
          <van-cell>
            <div flex justify="between">
              <span>金额</span>
              <span>￥ {{ currentEdit.amount }}</span>
            </div>
          </van-cell>
          <van-cell>
            <div flex justify="between">
              <span>分类</span>
              <Tag>{{ currentEdit.category }}</Tag>
            </div>
          </van-cell>
          <van-cell>
            <div flex justify="between">
              <span>标签</span>
              <span>
                <Tag ml="1" v-for="tag in currentEdit.tags">{{ tag }}</Tag>
              </span>
            </div>
          </van-cell>
          <van-cell>
            <div flex justify="between">
              <span>时间</span>
              <span>{{ format(new Date(currentEdit.timestamp), 'yyyy-MM-dd hh:mm') }}</span>
            </div>
          </van-cell>
          <van-cell>
            <div flex justify="between">
              <span>备注</span>
              <span>{{ currentEdit.description }}</span>
            </div>
          </van-cell>
        </van-cell-group>

        <div mt="4" text="right">
          <van-button round icon="delete" type="danger" @click="deleteAccount(currentEdit)"
            >删除</van-button
          >
        </div>
      </div>
    </action-sheet>
  </van-cell-group>
</template>

<style>
.van-action-sheet__header {
  font-weight: bold;
}
</style>
