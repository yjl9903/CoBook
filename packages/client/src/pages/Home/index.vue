<script setup lang="ts">
import { ref } from 'vue';
import { Button, Field, NumberKeyboard, CellGroup, Cell, Grid, GridItem } from 'vant';
import { fingerprint } from '@/logic/fingerprint';
import { template } from '~cobook';

const show = ref(false);
const value = ref('');

fingerprint().then((fg) => {
  console.log(fg.visitorId);
  console.log(fg);
});

console.log(template);
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
      <Button round block type="primary" native-type="submit">提交</Button>
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