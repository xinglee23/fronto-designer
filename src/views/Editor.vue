<template>
  <div class="editor-wrapper">
    <a-row class="row-wrapper" type="flex" justify="center">
      <a-col class="left" :span="6">组件</a-col>
      <a-col class="center" :span="12">画布</a-col>
      <a-col class="right" :span="6">设置面板</a-col>
    </a-row>

    <a-dropdown>
      <a-button>登陆信息</a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="login">login</a-menu-item>
          <a-menu-item @click="logout"> logout </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from 'vue';
import {useStore} from 'vuex';
import {message} from 'ant-design-vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const login = () => {
      store.commit('login');
      message.success('login success', 2);
    };
    const logout = () => {
      store.commit('logout');
      router.push('/');
    };

    return {
      login,
      logout,
    };
  },
});
</script>

<style>
.editor-wrapper {
  color: #fff;
  height: 100%;
}
.row-wrapper {
  height: 80vh;
}
.left {
  background: blue;
}
.center {
  background: red;
}
.right {
  background: green;
}
</style>
