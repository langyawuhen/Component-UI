<template>
  <div class="player">player{{ title }}</div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: Number,
    default: 0
  }
})
</script>
<style scoped lang="scss">
.player {
  background-color: black;
  height: 100%;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
