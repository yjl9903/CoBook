<script setup lang="ts">
import { ref, inject, Ref, watch } from 'vue';
import {
  Icon,
  Divider,
  Field,
  NumberKeyboard,
  CellGroup,
  Cell,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Loading,
  Notify
} from 'vant';
import { format, subDays } from 'date-fns';

import { Template } from '@cobook/shared';
import { template, categories } from '~cobook';
import { useAccountStore } from '@/logic/account';
import { EnterHomeKey } from '@/constant';

import AccountList from './List.vue';
import TagSelector from './TagSelector.vue';
import CatSelector from './CatSelector.vue';

inject<Ref<boolean>>(EnterHomeKey)!.value = true;

const store = useAccountStore();

store.init();

const formatText = 'yyyy 年 M 月 d 日';
const groupByDay = ref(store.groupBy((item) => format(new Date(item.timestamp), formatText)));
watch(store.accounts, () => {
  groupByDay.value = store.groupBy((item) => format(new Date(item.timestamp), formatText));
});
const now = new Date();
const recentWeek = [0, 1, 2, 3, 4, 5, 6].map((d) => {
  const date = subDays(now, d);
  return format(date, formatText);
});

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

const useTemplate = (template: Omit<Template, 'icon'>) => {
  cat.value = template.category;
  if (template.amount) {
    amt.value = String(template.amount);
  } else {
    amt.value = '';
  }
  if (template.tags) {
    tags.value = template.tags;
  } else {
    tags.value = [];
  }
  if (template.description) {
    description.value = template.description;
  } else {
    description.value = template.name;
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
      />

      <cat-selector v-model="cat"></cat-selector>

      <tag-selector v-model="tags"></tag-selector>

      <cell>
        <tabs v-model:active="active">
          <tab v-for="category in categories" :key="category.name" :title="category.name">
            <grid :border="false" clickable>
              <grid-item
                icon="success"
                :text="`默认`"
                @click="useTemplate({ name: '', category: category.name })"
              ></grid-item>
              <grid-item
                v-for="t in template.filter((t) => t.category === category.name)"
                @click="useTemplate(t)"
              >
                <div
                  flex
                  flex-col
                  items="center"
                  justify="center"
                  class="content-center justify-items-center"
                >
                  <van-image :src="t.icon" fit="scale-down" class="max-h-[50%] max-w-[50%]">
                    <template v-slot:loading>
                      <div h="full" w="full">
                        <loading type="spinner" size="20" />
                      </div>
                    </template>
                  </van-image>
                  <span class="van-grid-item__text" mt="2" text="center">{{ t.name }}</span>
                </div>
              </grid-item>
            </grid>
          </tab>
        </tabs>
      </cell>
    </cell-group>

    <div style="margin: 16px 16px 24px" class="icon-btn" flex justify="center">
      <van-button round block type="success" @click="submit">记录</van-button>
      <van-button ml="2" px="0" w="16" url="weixin://" round>
        <icon name="/img/wechat.svg" size="1.25rem" />
      </van-button>
      <van-button ml="2" px="0" w="16" url="alipay://platformapi/startapp?appId=20000056" round>
        <icon name="/img/alipay.svg" size="1.25rem" />
      </van-button>
    </div>

    <Divider :hairline="false"></Divider>

    <div v-for="d in recentWeek" :key="d">
      <div v-show="!!groupByDay.get(d)" mb="4">
        <h3 style="margin: 0 1.5rem 0.5rem" text="gray-500">{{ d }}</h3>
        <account-list :accounts="groupByDay.get(d) ?? []" format-text="HH:mm"></account-list>
      </div>
    </div>

    <div h="4" w="full"></div>

    <number-keyboard
      v-model="amt"
      theme="custom"
      close-button-text="确认"
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

.icon-btn .van-button__content {
  @apply flex items-center justify-center;
}
</style>
