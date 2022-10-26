<template>
  <v-app>
    <Sidebar />
    <Navbar />
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
<style></style>
