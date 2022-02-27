<script setup lang="ts">
import { ref, inject, Ref } from 'vue';
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

import { Template } from '@cobook/shared';
import { template, categories } from '~cobook';
import { useAccountStore } from '@/logic/account';
import AccountList from './List.vue';
import { EnterHomeKey } from '@/constant';

inject<Ref<boolean>>(EnterHomeKey)!.value = true;

const store = useAccountStore();
const active = ref();
const show = ref(false);

const amt = ref();
const amtErrMsg = ref('');
const formatter = (text: string) => {
  amtErrMsg.value = '';
  if (/\d+\.\d\d\d+$/.test(text)) {
    return Number.parseFloat(text).toFixed(2);
  } else {
    return text;
  }
};

const cat = ref(categories.length > 0 ? categories[0].name : '');
const tags = ref([] as string[]);
const description = ref('');

const useTemplate = (template: Omit<Template, 'name' | 'icon'>) => {
  cat.value = template.category;
  if (template.amount) {
    amt.value = template.amount;
  }
  if (template.tags) {
    tags.value = template.tags;
  }
  if (template.description) {
    description.value = '';
  }
};

const submit = async () => {
  if (!amt.value || amt.value === '') {
    amtErrMsg.value = '请输入金额';
    return;
  }

  await store.push({
    amount: +amt.value,
    category: cat.value,
    tags: tags.value,
    description: description.value
  });

  Notify({ message: '记录成功', type: 'success' });

  amt.value = '';
  tags.value = [];
  description.value = '';
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
        clearable
        :formatter="formatter"
        :maxlength="10"
        :error-message="amtErrMsg"
        error-message-align="right"
        @touchstart.stop="show = true"
        input-align="right"
      >
        <!-- <template #extra>
          <span>￥ </span>
        </template> -->
      </field>

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
              <grid-item
                icon="success"
                :text="`使用`"
                @click="useTemplate({ category: category.name })"
              ></grid-item>
              <grid-item
                v-for="t in template.filter((t) => t.category === category.name)"
                @click="useTemplate(t)"
              >
                <div flex flex-col items="center" justify="center">
                  <van-image :src="t.icon" height="50%" width="50%"></van-image>
                  <span class="van-grid-item__text mt-2">{{ t.name }}</span>
                </div>
              </grid-item>
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
