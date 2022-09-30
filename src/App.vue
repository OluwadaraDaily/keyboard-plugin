<template>
  <div id="app">
    <div class="search">
      <input type="search" name="search" id="" @keypress="keypressTest">
    </div>
    <div class="keyboard">
      <Keyboard/>
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
  methods: {
    keypressTest(e) {
      console.log('Event ==>', e)
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

  .search {
    input {
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
  button:active {
    background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
     -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
          box-shadow: inset 0px 0px 5px #c1c1c1;
   outline: none;
  }
}

</style>
