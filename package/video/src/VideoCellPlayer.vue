<template>
  <div class="player">
    <span>player{{ title }} </span>
    <div class="player-option" :style="{'justify-content':speed===''?'flex-end':'space-between'}">
      <span v-if="speed" v-html="speed"></span>
      <div>
        <el-icon class="icon" size="25" v-for="(option,index) in optionItems" :key="index">
          <component :is="option.icon" @click="option.clickEvent"/>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {shallowRef, inject, onBeforeMount, ref} from 'vue'
import Play from "@@/svgIcon/play.vue";
import Camera from "@@/svgIcon/camera.vue";
import OpenFullScreen from "@@/svgIcon/open-full-screen.vue";

defineProps({
  title: {
    type: Number,
    default: 0
  }
})
const speed = ref<string>("")
onBeforeMount(() => {
  speed.value = inject('speed') ?? ""
})
const optionItems = shallowRef([
  {icon: Play, clickEvent: () => clickEvent(1)},
  {icon: Camera, clickEvent: () => clickEvent(2)},
  {icon: OpenFullScreen, clickEvent: () => clickEvent(3)}
])
const clickEvent = (val: number) => {
  console.log("val ===>", val)
}
</script>
<style>
</style>
<style scoped lang="scss">
.player {
  background-color: black;
  height: 100%;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &-option {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: rgba(29, 33, 41, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 14px;

    .icon {
      cursor: pointer;
    }

    .icon:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
