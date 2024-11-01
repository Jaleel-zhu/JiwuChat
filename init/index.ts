
import { useHotkeyInit, useSettingInit, useSettingUnmounted } from "./setting";
import { useAuthInit, userTauriInit } from "./init";
import { useWSUnmounted, useWsInit } from "./ws";
import { useIframeInit } from "./iframe";


export async function useInit() {
  // 鉴权
  useAuthInit();
  // Tauri
  userTauriInit();
  // 设置配置
  useSettingInit();
  // iframe通信
  useIframeInit();
  // 会话
  useWsInit();
  // 初始化快捷键
  useHotkeyInit();
  // 初始化数据库
  // useDBInit();
}
export async function useUmounted() {
  useSettingUnmounted();
  useWSUnmounted();
}
