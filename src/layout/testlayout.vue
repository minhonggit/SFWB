<template>
  <div class="main-content bg-default">
    
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <!-- <router-link slot="brand" class="navbar-brand" to="/">
                <img src="img/brand/white.png"/>
            </router-link> -->

      <template v-slot="{ closeMenu }">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="img/brand/green.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                @click="closeMenu"
                class="navbar-toggler"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            
            <router-link class="nav-link nav-link-icon" to="/AboutService">
              <i class="ni ni-notification-70"></i>
              
              <span class="nav-link-inner--text">About Service</span>
            </router-link>
          </li>
          <li class="nav-item">
            
            <router-link class="nav-link nav-link-icon" to="/Bin">
              <i class="ni ni-bold"></i>
              
              <span class="nav-link-inner--text">Bin</span>
            </router-link>
          </li>
          <!--
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/testRegister">
              <i class="ni ni-badge"></i>
              <span class="nav-link-inner--text">Register</span>
            </router-link>
          </li>
          -->
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/testLogin">
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/Settings">
              <i class="ni ni-settings-gear-65"></i>
              <span class="nav-link-inner--text">Settings</span>
            </router-link>
          </li>
        </ul>
      </template>
    </base-nav>
    <!-- Header -->
    <div class="header bg-gradient-Default py-7 py-lg-8">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">Smart Food Waste Bin</h1>
              <h2 class="text-lead text-white">
                makes you comfortable
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x=""
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      
    </div>
    <!-- Page content -->
    
    <div class="container mt--8 pb-5">
      <router-view></router-view>
    </div>
    
    <footer class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; {{ year }}
              <a
                href="https://www.creative-tim.com"
                class="font-weight-bold ml-1"
                target="_blank"
                >삼성전자제품개발팀</a
              >
            </div>
          </div>
          <div class="col-xl-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-xl-end"
            >
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  >노형준</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link"
                  target="_blank"
                  >이영준</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  class="nav-link"
                  target="_blank"
                  >김민수</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                  class="nav-link"
                  target="_blank"
                  >방종호</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                  class="nav-link"
                  target="_blank"
                  >민홍기</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "test-layout",
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style>

</style>
