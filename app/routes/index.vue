<template lang="html">
  <div class="">
    <div class="index">
      <div class="container">
        <h2 class="welcome">Ribbiter Welcomes You</h2>
        <div class="buttons">
          <button class="buttons__actual">
            <router-link :to="{ name: 'register' }">Register</router-link>
          </button>
          <button class="buttons__actual">
            <router-link :to="{ name: 'login' }">Login</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
