<template lang="html">
  <div class="app">
    <div class="top-nav">
      <div class="container">
        <div class="navbar">
          <span class="navbar__left">
            <a href="#" class="">Ribbiter</a>
          </span>
          <div class="navbar__right">
            <a href="#" class="">Ribbits</a>
            <a href="#" class="">Frogs</a>
            <a href="#" class="">Login</a>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
