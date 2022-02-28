<script setup lang="ts">
import { ref, toRefs, onBeforeUpdate } from 'vue';
import { ActionSheet, Checkbox, CheckboxGroup, CheckboxInstance } from 'vant';

import { tags as allTags } from '~cobook';

const props = defineProps<{ modelValue: string[] }>();
const emit = defineEmits<{ (e: 'update:modelValue', tags: string[]): void }>();

const { modelValue: tags } = toRefs(props);

const show = ref(false);

const checkboxRefs = ref([] as CheckboxInstance[]);
onBeforeUpdate(() => {
  checkboxRefs.value = [];
});
const toggle = (index: number) => {
  checkboxRefs.value[index].toggle();
};
const closeAll = () => {
  tags.value = [];
  emit('update:modelValue', []);
};
</script>

<template>
  <van-cell clickable @click="show = true">
    <div flex justify="between">
      <span>标签</span>
      <span>
        <Tag ml="1" v-for="tag in tags" :tag="tag"></Tag>
      </span>
    </div>
  </van-cell>

  <action-sheet
    v-model:show="show"
    title="标签"
    teleport="#popup-container"
    :duration="0.2"
    :overlay-style="{ background: 'rgba(0, 0, 0, .1)' }"
  >
    <div px="4" pb="8">
      <checkbox-group
        :model-value="tags"
        @update:model-value="(tags) => emit('update:modelValue', tags)"
      >
        <van-cell-group>
          <van-cell
            v-for="(item, index) in allTags"
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
              <checkbox
                :name="item.name"
                :ref="(el: any) => checkboxRefs[index] = el"
                @click.stop
                shape="square"
              />
            </template>
          </van-cell>
        </van-cell-group>

        <div mt="4" flex justify="center">
          <van-button type="success" block mr="2" @click="show = false">确认</van-button>
          <van-button
            type="danger"
            icon="cross"
            rounded="full"
            round
            @click="closeAll"
          ></van-button>
        </div>
      </checkbox-group>
    </div>
  </action-sheet>
</template>
