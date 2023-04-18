<template>
  <div class="login_page_wrapper">
    <div class="left_hand_section">
      <div class="logo">
        <img src="/images/logo.svg" width="120">
      </div>
      <div class="text-content">
        <h3>This industry attracts more capital than it deserves.</h3>
      </div>
      <div class="left_banner_image text-center">
        <img src="/images/Group 2281.svg" width="400">
      </div>
    </div>

    <div class="right_hand_section">
      <div class="login_section">
        <h3 class="mb-4">Create new password</h3>
        <div>
          <form @submit.prevent="FormSubmit()">
            <label class="mb-1 d-block">New Password <span class="text-danger">*</span></label>
            <div class="password_field">
              <input v-model="form.password" :type="showPassword1 ? 'text' : 'password'" placeholder="Enter New Password" class="form-control">
              <span @click="showHidePassword(1)">
                <b-icon :icon="showPassword1 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="dark"></b-icon>
              </span>
            </div>
            <label class="mt-3 mb-1 d-block">Confirm New Password <span class="text-danger">*</span></label>
            <div class="password_field">
              <input v-model="form.current_password" :type="showPassword2 ? 'text' : 'password'" placeholder="Enter Confirm Password" class="form-control">
                <span @click="showHidePassword(2)">
                <b-icon :icon="showPassword2 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="dark"></b-icon>
              </span>
            </div>
            <button type="submit" class="loginBtn mt-3" >Set Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Blank',
  head:{
    title: 'Create new password'
  },
  data() {
    return {
      showPassword1: false,
      showPassword2: false,
      form: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    FormSubmit(){

    },
    showHidePassword(id) {
      this['showPassword' + id] = !this['showPassword' + id]
    },
  },
}
</script>

<style lang="scss" scoped></style>

