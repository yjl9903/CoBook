<script setup lang="ts">
import { ref } from 'vue';
import {
  Field,
  NumberKeyboard,
  CellGroup,
  Cell,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Tag,
  Notify
} from 'vant';

import { template, categories } from '~cobook';
import { useAccountStore } from '@/logic/account';
import AccountList from './List.vue';

const store = useAccountStore();
const active = ref();
const show = ref(false);

const amt = ref('');
const cat = ref(categories.length > 0 ? categories[0].name : '');

const submit = async () => {
  await store.push({
    amount: +amt.value,
    category: cat.value,
    tags: [],
    description: ''
  });

  Notify({ message: '记录成功', type: 'success' });

  amt.value = '';
};
</script>

<template>
  <div id="home" h="full" pt="4">
    <cell-group inset>
      <field
        v-model="amt"
        label="金额"
        readonly
        clickable
        placeholder="￥ 0"
        @touchstart.stop="show = true"
        input-align="right"
      />

      <cell>
        <div flex justify="between">
          <span>分类</span>
          <Tag>{{ cat }}</Tag>
        </div>
      </cell>

      <cell>
        <tabs v-model:active="active">
          <tab v-for="category in categories" :key="category.name" :title="category.name">
            <grid :border="false" clickable>
              <grid-item icon="success" :text="`使用`" @click="cat = category.name"></grid-item>
              <grid-item
                v-for="t in template.filter((t) => t.category === category.name)"
                icon="photo-o"
                :text="t.name"
              />
            </grid>
          </tab>
        </tabs>
      </cell>
    </cell-group>

    <div style="margin: 16px">
      <van-button round block type="success" @click="submit">记录</van-button>
    </div>

    <account-list></account-list>

    <number-keyboard
      v-model="amt"
      extra-key="."
      :show="show"
      :maxlength="10"
      @blur="show = false"
    />
  </div>
</template>

<style>
#home {
  background: rgb(247, 247, 247);
}
</style>
