<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { CellGroup, Field, Notify } from 'vant';

import { name } from '~cobook';
import { login } from '@/logic/auth';

const router = useRouter();
const pass = ref('');

const submit = async () => {
  const onError = () => {
    Notify({ type: 'danger', message: '密码错误' });
    pass.value = '';
  };

  try {
    if (await login(pass.value)) {
      Notify.clear();
      await router.replace({ name: 'Home' });
    } else {
      onError();
    }
  } catch {
    onError();
  }
};
</script>

<template>
  <div id="login" h="full" flex flex-col px="8" content="center">
    <div h="1/4"></div>
    <div>
      <h1 mb="12">{{ name }}</h1>
      <cell-group>
        <field
          border-gray-500
          v-model="pass"
          label="密码"
          type="password"
          placeholder="请输入密码"
        />
      </cell-group>
      <van-button mt="12" round type="success" block @click="submit">进入</van-button>
    </div>
  </div>
</template>

<style>
#login {
  background: white;
}
</style>
