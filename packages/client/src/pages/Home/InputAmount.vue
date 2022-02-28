<script setup lang="ts">
import { ref, watch } from 'vue';
import { Field, NumberKeyboard } from 'vant';

const props = defineProps<{ modelValue: number }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>();

const show = ref(false);
const amt = ref('');
const amtErrMsg = ref('');

watch(
  () => props.modelValue,
  (value: number) => {
    amt.value = String(value);
  },
  { immediate: true }
);

watch(amt, (value: string) => {
  emit('update:modelValue', +value);
});

const formatter = (text: string) => {
  amtErrMsg.value = '';
  if (/\d+\.\d\d\d+$/.test(text)) {
    return Number.parseFloat(text).toFixed(2);
  } else {
    return text;
  }
};
</script>

<template>
  <field
    font="mono"
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
  <number-keyboard v-model="amt" extra-key="." :show="show" :maxlength="10" @blur="show = false" />
</template>
