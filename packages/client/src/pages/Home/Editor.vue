<script setup lang="ts">
import { ref, watch } from 'vue';
import { Field, ActionSheet, Notify } from 'vant';
import format from 'date-fns/format';

import { AccountItem } from '@cobook/shared';
import { useAccountStore } from '@/logic/account';

import TagSelector from './TagSelector.vue';
import EditContainer from './EditContainer.vue';

const props = defineProps<{ account: AccountItem }>();

const emit = defineEmits<{ (e: 'close'): void }>();

const currentEdit = ref<AccountItem | null>(props.account);
const showEdit = ref(false);

watch(
  () => props.account,
  (account) => {
    if (!!account) {
      currentEdit.value = {
        ...account
      };
      showEdit.value = true;
    }
  }
);

const store = useAccountStore();

const saveAccount = async () => {
  if (currentEdit.value) {
    await store.update(props.account.timestamp, currentEdit.value);
    showEdit.value = false;
    Notify({ message: '更新成功', type: 'success' });
  }
};

const deleteAccount = async () => {
  if (currentEdit.value) {
    await store.delete(currentEdit.value);
    showEdit.value = false;
    Notify({ message: '删除成功', type: 'success' });
  }
};
</script>

<template>
  <action-sheet
    v-model:show="showEdit"
    :title="account && format(new Date(account.timestamp), 'yyyy-MM-dd hh:mm')"
    :duration="0.2"
    :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
    @close="emit('close')"
  >
    <div px="4" pb="8">
      <van-cell-group v-if="currentEdit">
        <EditContainer title="金额">
          <template #cell>
            <div flex justify="between">
              <span>金额</span>
              <span>￥ {{ currentEdit.amount }}</span>
            </div>
          </template>
        </EditContainer>

        <van-cell>
          <div flex justify="between">
            <span>分类</span>
            <Category :category="currentEdit.category"></Category>
          </div>
        </van-cell>

        <tag-selector v-model="currentEdit.tags"></tag-selector>

        <EditContainer title="时间">
          <template #cell>
            <div flex justify="between">
              <span>时间</span>
              <span>{{ format(new Date(currentEdit.timestamp), 'yyyy-MM-dd hh:mm:ss') }}</span>
            </div>
          </template>
        </EditContainer>

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
