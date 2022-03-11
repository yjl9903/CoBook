<script setup lang="ts">
import { useAccountStore } from '@/logic/account';
import AccountList from '../Home/List.vue';

const store = useAccountStore();
</script>

<template>
  <div pt="4">
    <account-list :accounts="store.accounts"></account-list>
  </div>
</template>
