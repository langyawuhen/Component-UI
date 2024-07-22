<!--suppress ALL -->
<template>
  <div class="cell">
    <div class="cell-player">
      <div :class="cellClass(i)" v-for="i in cellCount" :key="i">
        <VideoCellPlayer :title="i" v-if="cellCount != 6"></VideoCellPlayer>
        <VideoCellPlayer :title="i" v-if="cellCount == 6 && i != 2 && i != 3"></VideoCellPlayer>
        <template v-if="cellCount == 6 && i == 2">
          <div class="cell-player-6-2-cell">
            <VideoCellPlayer :title="i"></VideoCellPlayer>
            <VideoCellPlayer :title="i+1"></VideoCellPlayer>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, watch} from 'vue'
import VideoCellPlayer from './VideoCellPlayer.vue'

const props = defineProps({
  receiveCount: {
    type: Number,
    default: 4
  }
})

const cellCount = ref<number>(4)
watch(() => props.receiveCount, (nv: number) => {
  cellCount.value = nv
})

function cellClass(index: number) {
  switch (cellCount.value) {
    case 1:
      return ['cell-player-1']
    case 4:
      return ['cell-player-4']
    case 6:
      if (index == 1)
        return ['cell-player-6-1']
      if (index == 2)
        return ['cell-player-6-2']
      if (index == 3)
        return ['cell-player-6-none']
      return ['cell-player-6']
    case 9:
      return ['cell-player-9']
    case 16:
      return ['cell-player-16']
    default:
      break;
  }
}
</script>
<style scoped lang="scss">
.cell-player {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cell-player-4 {
  width: 50%;
  height: 50% !important;
  box-sizing: border-box;
}

.cell-player-1 {
  width: 100%;
  box-sizing: border-box;
}

.cell-player-6-1 {
  width: 66.66%;
  height: 66.66% !important;
  box-sizing: border-box;
}

.cell-player-6-2 {
  width: 33.33%;
  height: 66.66% !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.cell-player-6-none {
  display: none;
}

.cell-player-6-2-cell {
  width: 100%;
  height: 50% !important;
  box-sizing: border-box;
}

.cell-player-6 {
  width: 33.33%;
  height: 33.33% !important;
  box-sizing: border-box;
}

.cell-player-9 {
  width: 33.33%;
  height: 33.33% !important;
  box-sizing: border-box;
}

.cell-player-16 {
  width: 25%;
  height: 25% !important;
  box-sizing: border-box;
}

.cell {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
