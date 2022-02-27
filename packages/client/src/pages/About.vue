<script setup lang="ts">
import IconGithub from '~icons/mdi/github';

const version = __VERSION__;
const commit = __GITHUB_SHA__;
</script>

<template>
  <div class="text-center text-gray-400 pt-4">
    <div class="flex justify-center font-mono h-4">
      <a
        class="text-$text-light-1 inline-flex items-center mr-2"
        href="https://github.com/XLorPaste"
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
