<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view class="rout"/>

  <footer>
    <p>
      <i class="fas fa-code"></i> Developed by
      <a href="https://github.com/pablo-menor" target="_blank">Pablo</a>
    </p>
  </footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.rout{
  height: 100vh;
}
/* FOOTER */
footer {
  margin-top: 18px;
  height: 100px;
  width: 100vw;
  background-color: rgb(66, 66, 66);
}
footer p {
  line-height: 100px;
  text-align: center;
  color: rgb(255, 255, 255);
}
footer p i {
  color: rgb(44, 255, 1);
  margin-right: 5px;
}

footer p a {
  text-decoration: none;
  text-decoration: underline;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
</style>
