<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { Field, ActionSheet, Notify } from 'vant';
import format from 'date-fns/format';

import { AccountItem } from '@cobook/shared';
import { useAccountStore } from '@/logic/account';

import TagSelector from './TagSelector.vue';

const props = defineProps<{ account: AccountItem }>();

const emit = defineEmits<{ (e: 'close'): void }>();

const currentEdit = ref<AccountItem | undefined>(props.account);

watch(currentEdit, (value) => {
  if (!!value) {
    emit('close');
  }
});

watch(
  () => props.account,
  (account) => {
    currentEdit.value = {
      ...account
    };
  }
);

const showEdit = computed({
  get() {
    return !!currentEdit.value;
  },
  set() {
    currentEdit.value = undefined;
  }
});

const store = useAccountStore();

const saveAccount = async () => {
  if (currentEdit.value) {
    await store.update(props.account.timestamp, currentEdit.value);
    currentEdit.value = undefined;
    Notify({ message: '更新成功', type: 'success' });
  }
};

const deleteAccount = async () => {
  if (currentEdit.value) {
    await store.delete(currentEdit.value);
    currentEdit.value = undefined;
    Notify({ message: '删除成功', type: 'success' });
  }
};
</script>

<template>
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
            <Category :category="currentEdit.category"></Category>
          </div>
        </van-cell>
        <tag-selector v-model="currentEdit.tags"></tag-selector>
        <van-cell>
          <div flex justify="between">
            <span>时间</span>
            <span>{{ format(new Date(currentEdit.timestamp), 'yyyy-MM-dd hh:mm:ss') }}</span>
          </div>
        </van-cell>
        <field
          v-model="currentEdit.description"
          rows="2"
          autosize
          label="备注"
          type="textarea"
          maxlength="50"
          show-word-limit
        />
      </van-cell-group>

      <div mt="4" text="right">
        <van-button round icon="guide-o" type="success" mr="4" @click="saveAccount()"
          >保存</van-button
        >
        <van-button round icon="delete" type="danger" @click="deleteAccount()">删除</van-button>
      </div>
    </div>
  </action-sheet>
</template>
