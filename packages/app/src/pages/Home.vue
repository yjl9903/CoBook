<script setup lang="ts">
import { ref } from 'vue';
import { Button, Field, NumberKeyboard, CellGroup, Cell, Grid, GridItem } from 'vant';

const show = ref(false);
const value = ref('');
</script>

<template>
  <cell-group inset style="margin-top: 16px">
    <field
      v-model="value"
      label="金额"
      readonly
      clickable
      @touchstart.stop="show = true"
      input-align="right"
    />
    <cell>
      <grid :border="false" clickable>
        <grid-item v-for="i in 8" icon="photo-o" text="文字" />
      </grid>
    </cell>
  </cell-group>
  <div style="margin: 16px">
    <Button round block type="primary" native-type="submit">提交</Button>
  </div>
  <number-keyboard v-model="value" extra-key="." :show="show" :maxlength="10" @blur="show = false" />
</template>
