<script setup lang="ts">
import { Ref, ref, inject } from 'vue';
import { Button, Field, NumberKeyboard, CellGroup, Cell, Grid, GridItem } from 'vant';

import { enterHomeKey } from '@/constant';

const login = inject<Ref<boolean>>(enterHomeKey);
login!.value = true;

const show = ref(false);
const value = ref('');
</script>

<template>
  <div id="home" h="full" pt="4">
    <cell-group inset>
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
      <Button round block type="success" native-type="submit">记录</Button>
    </div>
    <number-keyboard
      v-model="value"
      extra-key="."
      :show="show"
      :maxlength="10"
      @blur="show = false"
    />
  </div>
</template>

<style>
#home {
  background: rgb(247, 247, 247);
}
</style>
