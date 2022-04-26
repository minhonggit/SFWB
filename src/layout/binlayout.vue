<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Bin"
      title="Bin"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'About Service',
            icon: 'ni ni-notification-70 text-danger',
            path: '/AboutService',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Bin',
            icon: 'ni ni-bold text-primary',
            path: '/Bin',
          }"
        />
        <!--
        <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'ni ni-planet text-blue',
            path: '/icons',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'ni ni-pin-3 text-orange',
            path: '/maps',
          }"
        />
        <sidebar-item
          :link="{
            name: 'User Profile',
            icon: 'ni ni-single-02 text-yellow',
            path: '/profile',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Tables',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/tables',
          }"
        />
        -->
        <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-circle-08 text-info',
            path: '/testLogin',
          }"
        />
        <!--
        <sidebar-item
          :link="{
            name: 'Register',
            icon: 'ni ni-badge text-pink',
            path: '/testRegister',
          }"
        />
        -->
         <sidebar-item
          :link="{
            name: 'Settings',
            icon: 'ni ni-settings-gear-65 text-yellow',
            path: '/Settings',
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
