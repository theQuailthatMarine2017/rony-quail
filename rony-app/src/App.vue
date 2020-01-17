<template>
  <div>
  <b-navbar spaced shadow data-aos="fade-up" data-aos-offset="30" data-aos-easing="ease-in-out">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <strong>Rony Marine Quail</strong>
            </b-navbar-item>
        </template>

                <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/contact' }">
                    <strong>Get In Touch</strong>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view></router-view>
    <footer-view></footer-view>
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
