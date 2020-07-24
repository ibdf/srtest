<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home Page</router-link> | <router-link to="/about">About</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
body, html {
  min-height: 100vh;
  height: 100vh;
}
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightcoral;
  min-height: 100vh;
  height: 100vh;
}
</style>
