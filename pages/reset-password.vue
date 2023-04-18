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
        <h3>Reset password</h3>
        <h6 class="mb-4 font-14">Enter your email address and we will send you the recovery link</h6>
        <div>
          <label class="mb-1">Email <span class="text-danger">*</span></label>
          <input type="email" name="email" placeholder="Enter Email Address" class="form-control" value="">
          <span class="text-danger"></span>

          <button class="loginBtn mt-3" @click="sendRecoveryLink()"> Send Recovery link</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Blank',
  head:{
    title: 'Reset Password'
  },
  data() {
    return {

    }
  },
  methods: {
    sendRecoveryLink(){
      this.$router.push('/create-new-password')
    }
  },
}
</script>

<style lang="scss" scoped></style>
