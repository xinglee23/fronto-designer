import hotkeys, {KeyHandler} from 'hotkeys-js';
import {onMounted, onUnmounted} from 'vue';

const useHotkey = (keys: string, callback: KeyHandler) => {
  onMounted(() => {
    hotkeys(keys, callback);
  });
  onUnmounted(() => {
    hotkeys.unbind(keys, callback);
  });
};

export default useHotkey;
