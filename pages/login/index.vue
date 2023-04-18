<template>
  <div class="login_page_wrapper">
    <div class="left_hand_section">
      <div class="logo">
        <img src="/images/logo.svg" width="120" />
      </div>
      <div class="text-content">
        <h3>This industry attracts more capital than it deserves.</h3>
      </div>
      <div class="left_banner_image text-center">
        <img src="/images/Group 2281.svg" width="400" />
      </div>
    </div>

    <div class="right_hand_section">
      <div class="login_section">
        <client-only placeholder="Loading..">
          <h3 class="mb-4">Login in to your account</h3>
          <b-alert v-if="error" show variant="danger">{{ error }}</b-alert>
          <form @submit.prevent="loginFormSubmit()">
            <label class="mb-1">Email <span class="text-danger">*</span></label>
            <input v-model="form.email" class="form-control" type="email" placeholder="Enter Email Address" />

            <label class="mt-3 mb-1 d-block">Password <span class="text-danger">*</span></label>
            <div class="password_field">
              <input v-model="form.password" class="form-control" :type="showPassword ? 'text' : 'password'" placeholder="Enter Password" />
              <span @click="togglePassword()">
                <b-icon :icon="showPassword ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
              </span>
            </div>

            <div class="rememberForgot d-flex justify-content-between">
              <div class="d-flex align-items-center" style="gap: 4px">
                <input id="remember" type="checkbox" />
                <label for="remember">Remember Password</label>
              </div>
              <div>
                <nuxt-link to="/reset-password">Forgot your password?</nuxt-link>
              </div>
            </div>

            <div v-if="!isLoading">
              <button :disabled="!form.email || !form.password" class="loginBtn" type="submit">Login</button>
            </div>
            <div v-else>
              <button disabled class="loginBtn" type="button">
                <b-spinner small type="grow"></b-spinner>Loading...
              </button>
            </div>

          </form>
          <div class="divider_section">
            <span>Sign up</span>
            <div class="divide_line"></div>
          </div>
          <div class="signUp_section">
            <nuxt-link to="/signup/reseller" class="signUpBtn">As a Reseller</nuxt-link>
            <nuxt-link to="/signup/wholesaler" class="signUpBtn">As a Wholesaler</nuxt-link>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  layout: 'Blank',
  data() {
    return {
      showPassword: false,
      form: {
        email: '',
        password: '',
      },
      isLoading: false,
      error: ''
    }
  },
  head: {
    title: 'login'
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    })
  },
  // mounted() {
  //   if (this.isLoggedIn) {
  //     this.$router.push('/')
  //   }
  // },
  methods: {
    loginFormSubmit() {
      this.$router.push('/')
      // this.error = ''
      // this.isLoading = true
      // this.$store.dispatch('auth/login', this.form).then(res => {
      //   this.isLoading = false
      //   this.$toast.success(res.message)
      //   this.$store.commit('auth/SET_USER', res.data.user)
      //   this.$store.commit('auth/SET_ACCESS_TOKEN', res.data.access)
      //   this.$store.commit('auth/SET_ROLE', 'admin')
      //   this.$router.push('/')
      // }).catch(err => {
      //   this.isLoading = false
      //   this.error = err.response.data.message
      //   this.$toast.error(err.response.data.message)
      // })
    },

    togglePassword() {
      this.showPassword = !this.showPassword
    }

  },
}
</script>

<style scoped></style>
