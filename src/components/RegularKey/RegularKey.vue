<template>
  <button class="key">
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import './RegularKey.scss'
</style>