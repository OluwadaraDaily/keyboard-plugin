<template>
  <!-- Keyboard arrangement -->
  <!-- Backtick, numbers 0 - 9, 2 special chars and backspace -->
  <!-- Tab, first row of letters, three special chars -->
  <!-- Caps Lock, 2nd row of letters, 2 special chars, Enter key -->
  <!-- Shift, 3rd row of letters, 3 special chars, Shift -->
  <!-- Control, Alt, Windows Key, Fn key, Space bar, Ctrl, Alt, four arrows -->
  <div class="outer-edge box">
    <div class="inner-edge">
      <Key v-for="(key, index) in keys" :key="index" :value="key"/>
      <TabKey/>
      <CapsLock/>
    </div>
  </div>
</template>

<script>
import Key from '../RegularKey/RegularKey.vue';
import TabKey from '../TabKey/TabKey.vue';
import { keys, numbers } from '../../helpers/constants'
import CapsLock from '../CapsLock/CapsLock.vue';
export default {
  name: 'key-board',
  components: {
    Key,
    TabKey,
    CapsLock
},
  data() {
    return {
      letters:['Q'],
      keys,
      numbers
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Keyboard.scss'
</style>