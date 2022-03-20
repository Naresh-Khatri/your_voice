<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title> Your voice </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <q-footer class="text-white">
        <q-toolbar style="padding: 0">
          <q-toolbar-title>
            <q-tabs v-model="tab" class="bg-primary bottom-nav">
              <q-route-tab to="/" icon="fas fa-volume-up" />
              <q-route-tab to="/recog" icon="fas fa-microphone" />
            </q-tabs>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);
const tab = ref("");

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
<style>
.bottom-nav {
  border-radius: 20px 20px 0px 0px;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  height: 7vh;
  width: 100%;
}
</style>
