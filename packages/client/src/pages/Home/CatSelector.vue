<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { ActionSheet, Radio, RadioGroup } from 'vant';

import { categories as allCategories } from '~cobook';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', cat: string): void }>();

const { modelValue: cat } = toRefs(props);

const show = ref(false);

const toggle = (index: number) => {
  emit('update:modelValue', allCategories[index].name);
};
</script>

<template>
  <van-cell clickable @click="show = true">
    <div flex justify="between">
      <span>分类</span>
      <span>
        <Category :category="cat"></Category>
      </span>
    </div>
  </van-cell>

  <action-sheet
    v-model:show="show"
    title="分类"
    teleport="#popup-container"
    :duration="0.2"
    :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
  >
    <div px="4" pb="8">
      <radio-group :model-value="cat" @update:model-value="(cat) => emit('update:modelValue', cat)">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in allCategories"
            clickable
            :key="item.name"
            @click="toggle(index)"
          >
            <div flex items="center">
              <span
                h="4"
                w="4"
                mr="2"
                inline-block
                rounded="full"
                :style="{ background: item.color }"
              ></span>
              <span>{{ item.name }}</span>
            </div>

            <template #right-icon>
              <radio :name="item.name" />
            </template>
          </van-cell>
        </van-cell-group>
      </radio-group>
    </div>
  </action-sheet>
</template>
