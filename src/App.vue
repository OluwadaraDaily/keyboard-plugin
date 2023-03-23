<template>
  <div id="app">
    <div class="text">
      <textarea 
        @keydown="onKeyDown"
        @focus.once="onFocus"
        v-model="text"
        rows="5"
        cols="10"
        id="textarea"
      >
      </textarea>
    </div>
    <div class="keyboard" id="keyboard">
      <div v-show="textareaFocused">
        <button class="px-4 py-2 font-bold text-white bg-gray-900 border-b-4 border-gray-700 rounded hover:bg-gray-400 hover:border-white-500" v-if="showKeyboard" @click="toggleShowKeyboard">
          Hide Keyboard
        </button>
        <button class="px-4 py-2 font-bold text-white bg-gray-900 border-b-4 border-gray-700 rounded hover:bg-gray-400 hover:border-white-500" v-else @click="toggleShowKeyboard">
          Show Keyboard
        </button>
      </div>
      <Keyboard 
        :shiftOn="shiftOn"
        :capsLockOn="capsLockOn"
        ref="keyboard" 
        @click="keyClicked"
        v-show="showKeyboard"
      />
    </div>
  </div>
</template>

<script>
import Keyboard from './components/Keyboard/Keyboard.vue';
export default {
  name: 'App',
  components: {
    Keyboard
  },
  data() {
    return {
      shiftOn: false,
      capsLockOn: false,
      text: '',
      showKeyboard: false,
      textareaFocused: false,
      test: false
    }
  },
  methods: {
    onKeyDown(e) {
      this.clickSystemKeyboard(e)
      if(e.key === 'Shift') {
        this.shiftOn = !this.shiftOn
      }
      if(e.key === 'CapsLock') {
        this.capsLockOn = !this.capsLockOn
      }
    },
    toggleCaps(e) {
       e.getModifierState('CapsLock') ? this.shiftOn = true : this.shiftOn = false
    },
    clickSystemKeyboard(e) {
      this.$refs.keyboard.clickSystemKeyboard(e.key, e.code)
    },
    onFocus() {
      this.toggleShowKeyboard()
      this.textareaFocused = true
    },
    keyClicked(val) {
      const textAreaElement = document.getElementById('textarea')
      if(val.length === 1) {
        this.text += val
      }
      if(val === 'space') {
        this.text += ' '
      }
      if(val === 'Backspace') {
        this.text = this.text.slice(0, -1)
      }
      if(val === 'Enter') {
        this.text += `\r\n`
      }
      if(val === 'Shift') {
        this.shiftOn = !this.shiftOn
      }
      if(val === 'CapsLock') {
        this.capsLockOn = !this.capsLockOn
      }
      textAreaElement.focus()
    },
    toggleShowKeyboard() {
      this.showKeyboard = !this.showKeyboard
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    .text {
      textarea {
        padding: 10px;
        border: 1px solid #000;
        width: 1028px + 20px;  // 27.2cms
        outline: none;
        border-radius: 4px;
      }
    }

    .keyboard {
      position: absolute;
      bottom: 100px;
      right: 0;
      left: 0;
    }

    .lower-keyboard {
      bottom: -280px;
    }
    .raise-keyboard {
      bottom: 0;
    }

    .no-show {
      display: none;
    }

    .show {
      display: block;
    }
  }

</style>
