<template>
  <v-app dark>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const cordova = this.$cordova;

    cordova.on("deviceready", () => {
      cordova.statusBar.overlaysWebView(true)
    });
  }
};
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/main';
</style>
