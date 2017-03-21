<template lang="html">
  <div class="register">
    <div class="container">
      <div class="card">
        <h1 class="card__header">Create an Account</h1>
        <form action="submit" class="card__form">
          <p class="card__username">Username</p>
          <p>
            <input type="text" v-model="formValues.username" class="input">
          </p>
          <p class="card__email">Email</p>
          <p>
            <input type="text" v-model="formValues.email" class="input">
          </p>
          <p class="card__password">Password</p>
          <p>
            <input type="text" v-model="formValues.password" class="input">
          </p>
          <div class="card__buttons--container">
            <a href="#"><button type="button" name="login" class="card__buttons card__buttons--login">Login</button></a>
            <a href="#"><button type="button" name="signup" class="card__buttons card__buttons--signup">Sign Up</button></a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      formValues: {
        username: '',
        email: '',
        password: '',
      }
    };
  },

  methods: {

  },
};
</script>
