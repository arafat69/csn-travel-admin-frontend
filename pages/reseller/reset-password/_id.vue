<template>
  <div class="mt-3">
    <nuxt-link to="/reseller/profile/1" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22"> Back
    </nuxt-link>

    <div class="passwordReset_section">
      <div class="resetPassword_box">
        <h3 class="mb-3">Reset Password</h3>
        <div class="card rounded-8 border-0">
          <div class="card-body">
            <div class="card_details_profile">
              <div class="profile">
                <img src="/images/Shop logo.svg" alt="photo">
              </div>
              <div class="profiile_details w-100">
                <div class="name_edit_box">
                  <span class="name">Moshe Shop</span>
                </div>
                <div class="email text-gray">
                  shop_00@example.com
                </div>
              </div>
            </div>
          </div>
          <div class="border-top"></div>
          <div class="card-body">
            <client-only placeholder="Loading...">
              <form action="">
                <label class="mb-1 mt-3 d-block">Create New Password</label>
                <div class="password_field">
                  <input v-model="form.password" class="form-control" :type="showPassword1 ? 'text' : 'password'" placeholder="Enter Current Password">
                  <span @click="showHidePassword(1)">
                    <b-icon :icon="showPassword1 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
                  </span>
                </div>
                <label class="mt-3 mb-1 d-block">Confirm New Password</label>
                <div class="password_field">
                  <input v-model="form.password_confirmation" class="form-control" :type="showPassword2 ? 'text' : 'password'" placeholder="Enter Current Password">
                  <span @click="showHidePassword(2)">
                    <b-icon :icon="showPassword2 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
                  </span>
                </div>
                <button type="submit" class="signupBtn btn default-bg text-white mt-3">Update Password</button>
              </form>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        password: '',
        password_confirmation: ''
      },
      showPassword1: false,
      showPassword2: false
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    })
  },
  methods: {
    showHidePassword(id) {
      this['showPassword' + id] = !this['showPassword' + id]
    }
  },
}
</script>

<style lang="scss" scoped></style>
