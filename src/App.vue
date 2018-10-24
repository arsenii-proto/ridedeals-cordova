<template>
  <v-app dark>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {

    this.$cordova().then(() => {
      this.$cordova.statusBar.overlaysWebView(true)
    });
  }
};
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/main';
</style>
