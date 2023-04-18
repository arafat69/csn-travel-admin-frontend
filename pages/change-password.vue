<template>
  <client-only placeholder="Loading...">
    <div class="row mt-lg-5 mt-md-2">
    <div class="col-md-8 col-lg-6 m-auto">
      <div class="card rounded-8 border-0">
        <div class="card-body">
          <div class="my-3 text-center">
            <h5>Change Your Password</h5>
          </div>
          <form action="">
            <label class="mb-1 d-block">Enter Current Password</label>
            <div class="password_field">
              <input v-model="form.current_password" class="form-control" :type="showPassword1 ? 'text' : 'password'" placeholder="Enter Current Password">
              <span @click="showHidePassword(1)">
                <b-icon :icon="showPassword1 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
              </span>
            </div>
            <label class="mb-1 mt-3 d-block">Create New Password</label>
            <div class="password_field">
              <input v-model="form.password" class="form-control" :type="showPassword2 ? 'text' : 'password'" placeholder="Enter New Password">
              <span @click="showHidePassword(2)">
                <b-icon :icon="showPassword2 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
              </span>
            </div>
            <label class="mt-3 mb-1 d-block">Confirm New Password</label>
            <div class="password_field">
              <input v-model="form.password_confirmation" class="form-control" :type="showPassword3 ? 'text' : 'password'" placeholder="Enter Confirm Password">
              <span @click="showHidePassword(3)">
                <b-icon :icon="showPassword3 ? 'eye-fill' : 'eye-slash-fill'" class="icon-24" variant="secondary"></b-icon>
              </span>
            </div>
            <button class="signupBtn btn default-bg text-white mt-3" type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      showPassword1: false,
      showPassword2: false,
      showPassword3: false,
      form: {
        current_password: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    showHidePassword(id) {
      this['showPassword' + id] = !this['showPassword' + id]
    }
  },
}
</script>

<style>

</style>
