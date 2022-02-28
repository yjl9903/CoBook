<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NavBar, Icon, Popover, PopoverAction } from 'vant';

import { name } from '~cobook';
import { authorized } from './logic/auth';
import { EnterHomeKey } from './constant';

const route = useRoute();
const router = useRouter();

const enterHome = ref(false);
provide(EnterHomeKey, enterHome);
authorized().then((r) => (enterHome.value = r));
const isLogin = computed(() => {
  return route.name === 'Login';
});

const showSetting = ref(false);

const actions = [
  { text: '记录', icon: 'home-o' },
  { text: '所有', icon: 'orders-o' },
  { text: '关于', icon: 'info-o' }
];
const handleSelect = (action: PopoverAction) => {
  if (action.text === actions[0].text) {
    router.push({ name: 'Home' });
  } else if (action.text === actions[1].text) {
    router.push({ name: 'Account' });
  } else if (action.text === actions[2].text) {
    router.push({ name: 'About' });
  }
};
</script>

<template>
  <nav-bar v-if="!isLogin && enterHome" fixed placeholder>
    <template #title>
      <span style="font-weight: bold">{{ name }}</span>
    </template>
    <template #right @click="showSetting = true">
      <Popover
        v-model:show="showSetting"
        :actions="actions"
        @select="handleSelect"
        placement="bottom-end"
        :show-arrow="false"
        :offset="[8, 12]"
      >
        <template #reference>
          <Icon name="ellipsis" color="black" mr="1" />
        </template>
      </Popover>
    </template>
  </nav-bar>

  <router-view id="main-view" h="full"></router-view>
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

#main-view {
  background: rgb(247, 247, 247);
}
</style>
