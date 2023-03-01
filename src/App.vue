<template>
  <div v-if="withHeader">
    <a-layout :style="{background: '#fff'}">
      <a-layout-header class="header">
        <router-link to="/">
          <div class="page-title">Fronto</div>
        </router-link>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useRoute} from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const route = useRoute();
    const withHeader = computed(() => route.meta.withHeader);

    return {
      withHeader,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
