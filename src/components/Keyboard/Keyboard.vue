<template>
  <!-- Keyboard arrangement -->
  <!-- Backtick, numbers 0 - 9, 2 special chars and backspace -->
  <!-- Tab, first row of letters, three special chars -->
  <!-- Caps Lock, 2nd row of letters, 2 special chars, Enter key -->
  <!-- Shift, 3rd row of letters, 3 special chars, Shift -->
  <!-- Control, Alt, Windows Key, Fn key, Space bar, Ctrl, Alt, four arrows -->
  <div class="outer-edge box">
    <div class="toggle">
      <div class="down-toggle" v-show="showKeyboard" @click="toggleKeyboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="up-toggle" v-show="!showKeyboard" @click="toggleKeyboard">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class="inner-edge">
      <!-- First Row -->
      <Key 
        v-for="(item, index) in firstRow" 
        :key="`r1-${index}`" 
        :id="item.lowerCase"
        :values="item" 
        :capsOn="capsOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
      />
      <!-- Second Row -->
      <Key 
        v-for="(item, index) in secondRow" 
        :key="`r2-${index}`" 
        :id="item.lowerCase"
        :values="item" 
        :capsOn="capsOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
      />

      <!-- Third Row -->
      <Key 
        v-for="(item, index) in thirdRow" 
        :key="`r3-${index}`"
        :id="item.lowerCase"
        :values="item" 
        :capsOn="capsOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
      />

      <!-- Fourth Row -->
      <Key 
        v-for="(item, index) in fourthRow" 
        :key="`r4-${index}`"
        :id="item.lowerCase"
        :values="item" 
        :capsOn="capsOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
      />

      <!-- Fifth Row -->
      <Key 
        v-for="(item, index) in fifthRow" 
        :key="`r5-${index}`"
        :id="item.lowerCase"
        :values="item" 
        :capsOn="capsOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        :ctrlKey="item.ctrlKey ? true: false"
        :spaceBarKey="item.spaceBarKey ? true: false"
        :lastRow="true"
        @click="keyClicked"
      />
    </div>
  </div>
</template>

<script>
import Key from '../RegularKey/RegularKey.vue';
import { firstRow, secondRow, thirdRow, fourthRow, fifthRow } from '../../helpers/constants';
export default {
  name: 'key-board',
  components: {
    Key
  },
  data() {
    return {
      firstRow,
      secondRow,
      thirdRow,
      fourthRow,
      fifthRow,
      showKeyboard: true
    }
  },
  props: {
    capsOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickKey(id) {
      const element = document.getElementById(`${id}`).children ? document.getElementById(`${id}`).children : document.getElementById(`${id}`)
      if(element.length) {
        console.log('ELEMENT ==>', element[0])
        // element[0].click()
      }
    },
    toggleKeyboard() {
      this.showKeyboard = !this.showKeyboard
      this.$emit('toggle-keyboard', this.showKeyboard)
    },
    keyClicked(val) {
      this.$emit('click', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './Keyboard.scss'
</style>