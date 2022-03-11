<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Field, ActionSheet, DatetimePicker, Notify } from 'vant';
import format from 'date-fns/format';

import { AccountItem } from '@cobook/shared';
import { useAccountStore } from '@/logic/account';

import TagSelector from './TagSelector.vue';
import CatSelector from './CatSelector.vue';
import InputAmount from './InputAmount.vue';
import EditContainer from './EditContainer.vue';

const props = defineProps<{ account: AccountItem }>();

const emit = defineEmits<{ (e: 'close'): void }>();

const currentEdit = ref<AccountItem | null>(props.account);
const showEdit = ref(false);
const timestamp = computed({
  get() {
    return currentEdit.value?.timestamp ? new Date(currentEdit.value?.timestamp) : new Date();
  },
  set(d: Date) {
    if (currentEdit.value?.timestamp) {
      currentEdit.value!.timestamp = d.toISOString();
    }
  }
});

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
    showEdit.value = false;
    await store.update(props.account.timestamp, currentEdit.value);
    Notify({ message: '更新成功', type: 'success' });
  }
};

const deleteAccount = async () => {
  if (currentEdit.value) {
    showEdit.value = false;
    await store.delete(currentEdit.value);
    Notify({ message: '删除成功', type: 'success' });
  }
};
</script>

<template>
  <action-sheet
    v-model:show="showEdit"
    :title="account && format(new Date(account.timestamp), 'yyyy-MM-dd HH:mm')"
    :duration="0.2"
    :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
    @close="emit('close')"
  >
    <div px="4" pb="8">
      <van-cell-group v-if="currentEdit">
        <input-amount v-model="currentEdit.amount"></input-amount>

        <cat-selector v-model="currentEdit.category"></cat-selector>

        <tag-selector v-model="currentEdit.tags"></tag-selector>

        <EditContainer title="时间">
          <template #cell>
            <div flex justify="between">
              <span>时间</span>
              <span>{{ format(new Date(currentEdit.timestamp), 'yyyy-MM-dd HH:mm:ss') }}</span>
            </div>
          </template>

          <template #default="{ close }">
            <datetime-picker
              v-model="timestamp"
              type="datetime"
              :max-date="new Date(new Date().getTime() + 3600 * 1000)"
              @confirm="close"
              @cancel="() => ((timestamp = new Date(account.timestamp)), close())"
            ></datetime-picker>
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
