<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import Burger from "./components/menu//Burger.vue";
import Sidebar from "./components/menu//Sidebar.vue";
</script>

<template>
  <header>
    <NavBar class="web-nav" />

    <!-- Navigation for Mobile -->
    <div class="mobile-nav">
      <nav class="main-nav">
        <router-link to="/">
          <img
            class="logo"
            alt="Kane Maslen Logo"
            src="@/assets/images/kane-maslen-logo.png"
          />
        </router-link>
        <Burger />
      </nav>
      <Sidebar></Sidebar>
    </div>

    <Sidebar></Sidebar>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
    url(./assets/fonts/Montserrat-Bold.otf) format("opentype");
}
@font-face {
  font-family: "Montserrat-Regular";
  src: local("Montserrat-Regular"),
    url(./assets/fonts/Montserrat-Regular.otf) format("opentype");
}

@font-face {
  font-family: "Montserrat-Light";
  src: local("Montserrat-Light"),
    url(./assets/fonts/Montserrat-Light.otf) format("opentype");
}

#app {
  font-family: "Montserrat-Light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222222;
  width: 100%;
  background: #ffffff;
}

body {
  margin: 0;
  font-family: "Montserrat-Light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-height: 100vh; */
  height: calc(100vh - 81px - 54px);
  max-height: 100%;
}

h1 {
  font-family: "Montserrat-Bold", sans-serif;
  font-size: 32px;
  margin: 0 0 10px;
}

h2 {
  color: #1d3557;
  font-family: "Montserrat-Light", sans-serif;
  font-size: 32px;
  font-weight: normal;
  margin: 0 0 20px;
}

h4 {
  color: #1d3557;
  font-size: 20px;
  font-family: "Montserrat-Bold", sans-serif;
  line-height: 44px;
  font-weight: 500;
  margin: 0;
  text-decoration: none !important;
}

h5 {
  color: #222222;
  font-family: "Montserrat-Light", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  margin: 0 0 70px;
}

h6 {
  font-size: 16px;
  font-family: "Montserrat-Bold", Helvetica, sans-serif;
  font-weight: normal;
  margin: 0;
  color: #222222;
  line-height: 32px;
}

p {
  font-size: 16px;
  font-family: "Montserrat-Light", sans-serif;
  line-height: 40px;
  margin: 0;
}

.label-heading {
  align-items: center;
  background: #1d3557;
  border-radius: 2px;
  color: #ffffff;
  display: flex;
  font-family: "Montserrat-Light", sans-serif;
  font-size: 16px;
  height: 52px;
  justify-content: center;
  margin-bottom: 10px;
  padding: 0 30px;
  width: fit-content;
  transition: text-decoration 0.3s ease;
}

.label-heading a:hover {
  text-decoration: underline !important;
  cursor: pointer;
}

button {
  outline: none;
}

.space-top-lge {
  margin-top: 120px;
}

.space-top-med {
  margin-top: 60px;
}

.space-top-sml {
  margin-top: 20px !important;
}

.space-btm-lge {
  margin-bottom: 80px;
}

.space-btm-med {
  margin-bottom: 60px;
}

.space-pad-med {
  padding-bottom: 60px;
}

.space-btm-sml {
  margin-bottom: 20px;
}

.row-images {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #dcf0f1;
  padding: 30px 0;
}

.mobile-nav {
  display: none;
}

.main-nav {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #222222;
  display: flex;
  font-size: 16px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99999;
  justify-content: space-between;
}

.main-nav a.router-link-exact-active {
  background-color: transparent;
  box-shadow: none;
}

.group {
  position: relative !important;
  margin-bottom: 45px;
}

.icon-btn {
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 44px;
  margin-right: 10px;
  transition: color 0.3s ease;
  width: 44px;
}

.icon-btn:hover {
  color: #030303 !important;
}

.flexed {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.flexed-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-space {
  margin-top: 40px !important;
}

.top-space-med {
  margin-top: 60px;
}

.top-space-lge {
  margin-top: 100px;
}

ul {
  padding-left: 1.2em;
}

@media only screen and (max-width: 1000px) {
  .mobile-nav {
    display: flex !important;
    z-index: 99999;
    position: fixed;
    width: 100%;
  }
  .web-nav {
    display: none !important;
  }

  .banner {
    padding-top: 0;
  }
}
</style>
