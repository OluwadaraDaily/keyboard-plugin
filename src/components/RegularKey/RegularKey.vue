<template>
  <div>
    <div
      id="key"
      class="flex items-center justify-center font-semibold text-gray-800 bg-white border border-gray-400 rounded column h-14 hover:bg-gray-100"
      :style="
      `width: ${width};
      text-transform: ${textCase}
      height: ${height}`
      "
      @click="clickKey()"
    >
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  components:  {
  },
  props: {
    values: {
      type: Object
    },
    shiftOn: {
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
      let value = ""
      if(this.values.lowerCase.length === 1) {
        value = this.shiftOn || this.capsLockOn ? this.values.upperCase : this.values.lowerCase
      } else {
        value = this.shiftOn ? this.values.upperCase : this.values.lowerCase
      }
      return value
    },
    width() {
      return this.tabKey ? '94.5px'
      : this.deleteKey || this.capsLockKey ? '94.5px'
      : this.enterKey ? '128.5px'
      : this.shiftKey ? '147.4px' 
      : this.ctrlKey ? '75.6px'
      : this.spaceBarKey ? '343.9px'
      : '56.7px';
    },
    height() {
      return this.lastRow ? '68px' : '56.7px'
    },
    textCase() {
      return this.capsLockOn || this.shiftOn ? 'uppercase' : 'lowercase'
    },
  },
  methods: {
    clickKey() {
      this.$emit('click', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RegularKey.scss'
</style>