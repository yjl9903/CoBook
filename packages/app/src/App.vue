<script setup lang="ts">
import { NavBar, Icon } from 'vant';
</script>

<template>
  <nav-bar fixed>
    <template #left>
      <Icon name="user-o" color="black" />
    </template>
    <template #title>
      <span class="font-bold">Coin</span>
    </template>
    <template #right>
      <Icon name="setting-o" color="black" />
    </template>
  </nav-bar>

  <router-view></router-view>
</template>
