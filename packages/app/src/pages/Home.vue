<script setup lang="ts">
import { ref } from 'vue';
import { Field, NumberKeyboard } from 'vant';

const show = ref(false);
const value = ref('');
</script>

<template>
<field v-model="value" label="金额" readonly clickable @touchstart.stop="show = true" />
<number-keyboard
  v-model="value"
  :show="show"
  :maxlength="6"
  @blur="show = false"
/>
</template>
