<!--suppress ALL -->
<template>
  <div class="video">
    <div class="video-title">
      【{{ layout }}】【{{ ratio }}】
    </div>
    <el-container class="video-container">
      <el-header height="46px" class="video-container-header">
        <div class="header-box">
          <div class="header-box-item" v-for="(module,i) in moduleItems" :key="i">
            <el-icon class="pointer" size="25" color="#1D2129">
              <component :is="module.icon"/>
            </el-icon>
            <span class="pointer module-title" v-if="module.isCloseAll">{{ module.currentValue }}</span>
            <el-dropdown v-else @command="handleCommand" popper-class="dropdown-showcase">
                        <span class="dropdown-showcase module-title">
                          <span>{{ module.currentValue }}</span>
                          <el-icon class="el-icon--right">
                            <CaretBottom/>
                          </el-icon>
                        </span>
              <template #dropdown v-if="!module.isCloseAll">
                <el-dropdown-menu>
                  <el-dropdown-item v-for="menu in module.select" :key="menu.value"
                                    :command="`${module.name}-${menu.value}`">
                    {{ menu.label }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main class="video-container-main">
        <VideoPlayer :receive-count="receiveCount"/>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts" name="HoskiVideo">
import {ref, markRaw, shallowRef} from 'vue'
import type {Component, Ref} from 'vue'
import {CaretBottom} from '@element-plus/icons-vue'
// import Camera from "@/components/svgIcon/camera.vue";
import CloseAll from "../../svgIcon/close-all.vue";
import CodeStream from "../../svgIcon/code-stream.vue";
import Layout from "../../svgIcon/layout.vue";
import Ratio from "../../svgIcon/ratio.vue";
import VideoPlayer from "./VideoPlayer.vue";

type Select = { label: string, value: string }
type ModuleItems = {
  name: string,
  icon: Component,
  isCloseAll: boolean,
  currentValue: Ref<string>,
  select: Select[]
}
const ratio = ref<string>("16:9")
const layout = ref<string>("4宫格")
const receiveCount = ref<number>(4)
const moduleItems = shallowRef<ModuleItems[]>([
  {name: "CloseAll", icon: CloseAll, isCloseAll: true, currentValue: ref<string>("全部关闭"), select: []},
  {
    name: "CodeStream",
    icon: CodeStream,
    isCloseAll: false,
    currentValue: ref<string>("子码流"),
    select: [{label: "子码流", value: "1"}]
  },
  {
    name: "Layout",
    icon: Layout,
    isCloseAll: false,
    currentValue: ref<string>("4宫格"),
    select: [
      {label: "1宫格", value: "1"},
      {label: "4宫格", value: "4"},
      {label: "9宫格", value: "9",},
      {label: "1大5小", value: "6"},
      {label: "16宫格", value: "16"}
    ]
  },
  {
    name: "Ratio",
    icon: Ratio,
    isCloseAll: false,
    currentValue: ref<string>("16:9"),
    select: [{label: "4:3", value: "1"}, {label: "16:9", value: "2"}]
  }
])
/**
 * 下拉菜单事件暴露
 * @param command
 */
const handleCommand = (command: string) => {
  const name = command.split('-')[0]
  const selectValue = command.split('-')[1]
  moduleItems.value.forEach((item: ModuleItems) => {
    if (item.name === name) {
      item.select.forEach((_item: Select) => {
        if (_item.value === selectValue) {
          item.currentValue.value = _item.label

          if (name === 'Layout') {
            layout.value = _item.label
            receiveCount.value = Number(selectValue)
          }

          if (name === 'Ratio') {
            ratio.value = _item.label
          }
        }
      })
    }
  })
}
</script>
<style lang="scss">
.dropdown-showcase {
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
}

.video {
  padding: 20px 15px;
  background: white;
  height: 100%;
  box-sizing: border-box;

  &-title {
    margin-bottom: 20px;
  }

  &-container {
    background: #f3f7fa;
    height: calc(100% - 35px);

    &-header {

      .header-box {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;
        gap: 20px;

        &-item {
          display: flex;
          align-items: center;
          height: 100%;

          .module-title {
            color: #4E5969;
          }
        }
      }
    }

    &-main {
      background: #252525;
      color: white;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
