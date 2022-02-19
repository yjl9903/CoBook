<script setup lang="ts">
import { ref } from 'vue';
import { NavBar, Icon, Popup } from 'vant';

const show = ref(false);
</script>

<template>
  <nav-bar fixed placeholder>
    <template #left>
      <Icon name="ellipsis" color="black" @click="show = true" />
    </template>
    <template #title>
      <span style="font-weight: bold">Coin</span>
    </template>
    <template #right>
      <Icon name="setting-o" color="black" />
    </template>
  </nav-bar>

  <popup v-model:show="show" position="left" :style="{ height: '100%', width: '60%' }"></popup>

  <router-view></router-view>
</template>

<style>
body {
  background: var(--background-color);
}
</style>
