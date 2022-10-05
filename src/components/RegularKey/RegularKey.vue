<template>
  <div>
    <ArrowKeys v-if="value === 'arrows'" />
    <div 
      class="key"
      :style="
      `width: ${width};
      text-transform: ${textCase}
      height: ${height}`
      "
      v-else
      @click="clickKey()"
    >
      {{value}}
    </div>
  </div>
</template>

<script>
import ArrowKeys from '../ArrowKeys/ArrowKeys.vue';
export default {
  components:  {
    ArrowKeys
  },
  props: {
    values: {
      type: Object
    },
    capsOn: {
      type: Boolean,
      default: false
    },
    capsLockOn: {
      type: Boolean,
      default: false
    },
    tabKey: {
      type: Boolean,
      default: false
    },
    deleteKey: {
      type: Boolean,
      default: false
    },
    shiftKey: {
      type: Boolean,
      default: false
    },
    enterKey: {
      type: Boolean,
      default: false
    },
    capsLockKey: {
      type: Boolean,
      default: false
    },
    lastRow: {
      type: Boolean,
      default: false
    },
    ctrlKey: {
      type: Boolean,
      default: false
    },
    spaceBarKey: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    value() {
      return this.capsOn ? this.values.upperCase : this.values.lowerCase
    },
    width() {
      return this.tabKey ? '94.5px'
      : this.enterKey || this.deleteKey || this.capsLockKey ? '113.4px' 
      : this.shiftKey ? '162.5px' 
      : this.ctrlKey ? '75.6px'
      : this.spaceBarKey ? '343.9px'
      : '56.7px';
    },
    height() {
      return this.lastRow ? '68px' : '56.7px'
    },
    textCase() {
      return this.capsLockOn || this.capsOn ? 'uppercase' : 'lowercase'
    }
  },
  methods: {
    clickKey() {
      this.$emit('click', this.value)
      console.log('Clicked...', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RegularKey.scss'
</style>