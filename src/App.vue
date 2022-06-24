<template>
  <div id="app">
    <div id="nav">
      <router-link to="/clock">clock</router-link>
      <router-link to="/ripple-button">ripple-button</router-link>
      <router-link to="/notification">Toast-notification</router-link>
      <router-link to="/progress-bar">Progress-Bar</router-link>
      <router-link to="vertical-slider">Vertical-Slider</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #42b983;
  font-size: 2rem;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 1rem;

    &.router-link-exact-active {
      color: green;
    }
  }
}
</style>
