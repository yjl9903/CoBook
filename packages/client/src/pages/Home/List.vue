<script setup lang="ts">
import { List, Tag } from 'vant';
import format from 'date-fns/format';

import { useAccountStore } from '@/logic/account';

const store = useAccountStore();

store.init();
</script>

<template>
  <van-cell-group inset>
    <List>
      <van-cell v-for="item in store.accounts.slice().reverse()" :key="item.timestamp">
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
