<!--suppress ALL -->
<template>
  <div style="height: 100%">
    <hoski-video/>
  </div>
</template>
<script setup lang="ts">
import {HoskiVideo} from "@@/video";
import {provide, onBeforeMount} from 'vue'

onBeforeMount(() => {
  provide('speed', '23Kb/s &emsp; 8920KB')
})
</script>
