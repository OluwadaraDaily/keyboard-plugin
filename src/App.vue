<template>
  <div id="app">
    <div class="text">
      <textarea @keydown="onKeyDown" @keydown.enter="createNewLine" @focus.once="onFocus" v-model="text" rows="5" cols="10" autofocus id="textarea"></textarea>
    </div>
    <transition class="keyboard">
      <div class="keyboard" id="keyboard">
        <Keyboard :capsOn="capsOn" ref="keyboard" @toggle-keyboard="toggleKeyboard" @click="keyClicked"/>
      </div>
    </transition>
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
      capsOn: false,
      text: ''
    }
  },
  methods: {
    onKeyDown(e) {
      this.clickKey(e)
      // this.toggleCaps(e)
      console.log('Event ==>', e)
    },
    toggleCaps(e) {
       e.getModifierState('CapsLock') ? this.capsOn = true : this.capsOn = false
    },
    clickKey(e) {
      this.$refs.keyboard.clickKey(e.key)
    },
    toggleKeyboard(showKeyboardVal) {
      console.log('Toggle Value ==>', showKeyboardVal)
      const keyboardElement = document.getElementById('keyboard')
      if((showKeyboardVal && keyboardElement.classList.contains('lower-keyboard'))) {
        keyboardElement.classList.remove('lower-keyboard')
        keyboardElement.classList.add('raise-keyboard')
      }
      else if(!(showKeyboardVal) && !(keyboardElement.classList.contains('show'))) {
        keyboardElement.classList.add('show')
      }
      else if((!(showKeyboardVal) && (keyboardElement.classList.contains('show')))) {
        keyboardElement.classList.add('lower-keyboard')
      }
      else if((!(showKeyboardVal) && (keyboardElement.classList.contains('raise-keyboard')))) {
        keyboardElement.classList.remove('raise-keyboard')
        keyboardElement.classList.add('lower-keyboard')
      }
    },
    onFocus() {
      this.toggleKeyboard(false)
    },
    keyClicked(val) {
      const textAreaElement = document.getElementById('textarea')
      console.log('Final Stop...')
      if(val.length === 1) {
        this.text += val
      }
      if(val === 'space') {
        this.text += ' '
      }
      if(val === 'backspace') {
        this.text = this.text.slice(0, -1)
      }
      if(val === 'enter') {
        this.text += `\r\n`
      }
      textAreaElement.focus()
    } 
  },
  mounted() {

  },
  watch: {
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
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
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

  button {
    background: #ededed;
    border: 1px solid #ccc;
    padding: 10px 30px;
    border-radius: 3px;
    cursor: pointer;
    height: 56.7px;
    text-transform: lowercase;
  }
  button:active, .active {
    background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 10px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 10px #c1c1c1;
          box-shadow: inset 0px 0px 10px #c1c1c1;
   outline: none;
  }
}

</style>
