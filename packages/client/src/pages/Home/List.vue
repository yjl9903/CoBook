<script setup lang="ts">
import { ref } from 'vue';
import { List, Tag } from 'vant';
import format from 'date-fns/format';

import { AccountItem } from '@cobook/shared';
import { useAuthStore } from '@/logic/auth';

const store = useAuthStore();

const accountItems = ref<AccountItem[]>([]);
store.client.list().then((items) => {
  accountItems.value.push(...items.reverse());
});
</script>

<template>
  <van-cell-group inset>
    <List>
      <van-cell v-for="item in accountItems" :key="item.timestamp">
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
  </van-cell-group>
</template>
