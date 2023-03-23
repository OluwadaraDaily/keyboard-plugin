<template>
  <!-- Keyboard arrangement -->
  <!-- Backtick, numbers 0 - 9, 2 special chars and backspace -->
  <!-- Tab, first row of letters, three special chars -->
  <!-- Caps Lock, 2nd row of letters, 2 special chars, Enter key -->
  <!-- Shift, 3rd row of letters, 3 special chars, Shift -->
  <!-- Control, Alt, Windows Key, Fn key, Space bar, Ctrl, Alt, four arrows -->
  <div class="box outer-edge">
    <div class="flex flex-wrap gap-3">
      <!-- First Row -->
      <Key 
        v-for="(item, index) in firstRow" 
        :id="item.lowerCase"
        :key="`r1-${index}`"
        :values="item" 
        :shiftOn="shiftOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
        ref="key"
      />
      <!-- Second Row -->
      <Key 
        v-for="(item, index) in secondRow" 
        :id="item.lowerCase"
        :key="`r2-${index}`" 
        :values="item" 
        :shiftOn="shiftOn"
        :capsLockOn="capsLockOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
        ref="key"
      />

      <!-- Third Row -->
      <Key 
        v-for="(item, index) in thirdRow"
        :id="item.lowerCase"
        :key="`r3-${index}`"
        :values="item" 
        :shiftOn="shiftOn"
        :capsLockOn="capsLockOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
        ref="key"
      />

      <!-- Fourth Row -->
      <Key 
        v-for="(item, index) in fourthRow"
        :id="item.lowerCase"
        :key="`r4-${index}`"
        :values="item" 
        :shiftOn="shiftOn"
        :capsLockOn="capsLockOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        @click="keyClicked"
        ref="key"
      />

      <!-- Fifth Row -->
      <Key 
        v-for="(item, index) in fifthRow"
        :id="item.lowerCase"
        :key="`r5-${index}`"
        :values="item" 
        :shiftOn="shiftOn"
        :deleteKey="item.deleteKey ? true : false"
        :tabKey="item.tabKey ? true : false"
        :shiftKey="item.shiftKey ? true : false"
        :enterKey="item.enterKey ? true : false"
        :capsLockKey="item.capsLockKey ? true : false"
        :ctrlKey="item.ctrlKey ? true: false"
        :spaceBarKey="item.spaceBarKey ? true: false"
        :lastRow="true"
        @click="keyClicked"
        ref="key"
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
      fifthRow
    }
  },
  props: {
    shiftOn: {
      type: Boolean,
      default: false
    },
    capsLockOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickSystemKeyboard(id, code) {
      // Exceptions => Shift, Tab, CapsLock, Control, Alt, Meta, Enter, Backspace
      let element
      if(document.getElementById(`${id}`)) {
        if (id === 'Shift') {
          element = code === 'ShiftLeft' ? document.getElementById(`Shift`).children : document.getElementById(`rShift`).children
        } 
        else if (id === 'Control') {
          element = code === 'ControlLeft' ? document.getElementById(`Ctrl`).children : document.getElementById(`rCtrl`).children
        }
        else if(id === 'Alt') {
          element = code === 'AltLeft' ? document.getElementById(`Alt`).children : document.getElementById(`rAlt`).children
        }   
        else {
          element = document.getElementById(`${id}`).children
        }
      } else {
        switch(id) {
          case 'Meta':
            element = document.getElementById(`win`).children
            break;
          case 'Control':
            element = document.getElementById(`ctrl`).children
            break;
          case ' ':
            element = document.getElementById(`space`).children
            break;
        }
      }
      element[0].classList.remove('bg-white')
      element[0].classList.add('bg-slate-300')
      setTimeout(() => {
        element[0].classList.remove('bg-slate-300')
        element[0].classList.add('bg-white')
      }, 50)
    },
    keyClicked(val) {
      this.$emit('click', val)
    },

  }
}
</script>

<style lang="scss" scoped>
@import './Keyboard.scss'
</style>