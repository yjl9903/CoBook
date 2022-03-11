<script setup lang="ts">
import { useAccountStore } from '@/logic/account';
import List from '../Home/List.vue';

const store = useAccountStore();
</script>

<template>
  <div pt="4">
    <List :accounts="store.accounts"></List>
  </div>
</template>
