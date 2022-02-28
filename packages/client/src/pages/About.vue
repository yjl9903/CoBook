<script setup lang="ts">
import { ref } from 'vue';
import IconGithub from '~icons/mdi/github';
import { fingerprint } from '@/logic/fingerprint';

const version = __VERSION__;
const commit = __GITHUB_SHA__;
const buildTime = __BUILD_TIME__;
const fg = ref('');

fingerprint().then(({ visitorId }) => (fg.value = visitorId));
</script>

<template>
  <div class="text-center text-gray-400 pt-4">
    <div mb="8" font="mono">FingerPrint: {{ fg }}</div>
    <div mb="8">
      <span>构建时间</span>
      <span font="mono">: {{ buildTime }}</span>
    </div>
    <div h="8" flex items="center" justify="center" font="mono">
      <a
        class="text-$text-light-1 inline-flex items-center mr-2"
        href="https://github.com/yjl9903/CoBook"
        target="_blank"
        ><icon-github class="align-middle"></icon-github
      ></a>
      <a
        v-if="!commit"
        class="inline-block"
        :href="`https://github.com/yjl9903/CoBook`"
        target="_blank"
      >
        <span>CoBook: {{ version }}</span>
      </a>
      <a
        v-else
        class="inline-block"
        :href="`https://github.com/yjl9903/CoBook/tree/${commit}`"
        target="_blank"
      >
        <span>CoBook: {{ commit.slice(0, 10) }}</span>
      </a>
    </div>
  </div>
</template>
