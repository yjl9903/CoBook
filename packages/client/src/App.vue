<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { NavBar, Icon, Popup } from 'vant';
import { useRoute } from 'vue-router';

import { name } from '~cobook';
import { enterHomeKey } from '@/constant';

const route = useRoute();

const enterHome = ref(false);
provide(enterHomeKey, enterHome);
const isLogin = computed(() => {
  return route.name === 'Login';
});

const show = ref(false);
</script>

<template>
  <nav-bar v-if="!isLogin && enterHome" fixed placeholder>
    <template #left>
      <Icon name="ellipsis" color="black" @click="show = true" />
    </template>
    <template #title>
      <span style="font-weight: bold">{{ name }}</span>
    </template>
    <template #right>
      <Icon name="setting-o" color="black" />
    </template>
  </nav-bar>

  <popup v-model:show="show" position="left" :style="{ height: '100%', width: '60%' }"></popup>

  <router-view></router-view>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
