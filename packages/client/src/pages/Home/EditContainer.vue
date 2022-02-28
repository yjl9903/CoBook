<script setup lang="ts">
import { ref } from 'vue';
import { ActionSheet } from 'vant';

defineProps<{ title: string }>();

const show = ref(false);
</script>

<template>
  <van-cell clickable @click="show = true">
    <slot name="cell"></slot>
  </van-cell>

  <action-sheet
    v-model:show="show"
    :title="title"
    :duration="0.2"
    :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
  >
    <div px="4" pb="8">
      <slot :close="() => (show = false)"></slot>
    </div>
  </action-sheet>
</template>
