<template>
  <div class="auth_page_wrapper">
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
      <div class="signup_section">
        <h3 class="mb-4">Registration as a Wholesaler</h3>
        <h5 class="mb-3">Personal Information</h5>
        <div>
          <form action="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="mb-1">Name</label>
                <input type="text" placeholder="Enter Name" class="form-control">
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Surname</label>
                <input type="text" placeholder="Enter Surname" class="form-control">
              </div>

              <div class="col-12 mb-3">
                <label class="mb-1">Fiscal Code (CF)</label>
                <input type="text" placeholder="Enter Fiscal Code (CF)" class="form-control">
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Genre</label>
                <input type="text" placeholder="Enter Genre" class="form-control">
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Date of Birth</label>
                <input type="date" class="form-control">
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Province of Birth</label>
                <input type="text" placeholder="Enter Province of Birth" class="form-control">
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">City of Birth</label>
                <input type="date" class="form-control">
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Citizenship <span class="text-danger">*</span></label>
                <select name="" class="form-control">
                  <option value="">Gibuti</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Telephone Number</label>
                <input type="text" class="form-control" placeholder="Enter Telephone Number">
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Mobile Number <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Mobile Number">
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Email <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email">
              </div>

              <div class="border-dot"></div>

              <div class="col-12 mb-2 mt-2">
                <h6 class="default-color font-weight-bold">Address information</h6>
              </div>

              <div class="col-md-8 mb-3">
                <label class="mb-1">Residence Address <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Mobile Number">
              </div>
              <div class="col-md-4 mb-3">
                <label class="mb-1">House No <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email">
              </div>

              <div class="col-md-12 mb-3">
                <label class="mb-1">Province of Residence <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email">
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">City of Residence <span class="text-danger">*</span></label>
                <select name="" class="form-control">
                  <option value="">Monsano</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Postal Code <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email">
              </div>


              <div class="col-12 mt-3">
                <button class="signupBtn btn default-bg text-white">Register</button>
              </div>
            </div>
          </form>
        </div>

      </div>

      <div class="footer">
        <span>Already have an account?</span>
        <nuxt-link to="/login" class="default-color font-weight-bold">Login Now</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Blank',
  head:{
    title: 'Registration as a Wholesaler'
  },
}
</script>

<style lang="scss" scoped></style>
