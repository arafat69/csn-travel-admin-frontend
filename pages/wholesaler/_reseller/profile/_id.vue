<template>
  <div class="mt-3">
    <nuxt-link to="/wholesaler/1/reseller" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22" /> Back
    </nuxt-link>

    <div class="card rounded-8 border-0 mt-3">
      <div class="card-body">
        <div class="card_details_profile">
          <div class="profile">
            <img src="/images/Shop logo.svg" alt="photo">
          </div>
          <div class="profiile_details w-100">
            <div class="name_edit_box d-flex justify-content-between align-items-center">
              <span class="name">Arthur Shop</span>
              <nuxt-link to="/wholesaler/1/profile/edit/1" class="editBtn">
                <img src="/images/ic-edit.svg" alt="edit">
                Edit Profile
              </nuxt-link>
            </div>
            <div class="email text-gray">
              arthurshop@example.com
            </div>
            <div class="d-flex justify-content-between align-items-center flex-wrap gap-10">
              <nuxt-link to="/wholesaler/1/3/booking" class="text-dark">View Bookings (5)</nuxt-link>
              <nuxt-link to="/wholesaler/1/reset-password/1">Reset Password</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top"></div>

      <div class="row">
        <div class="col-md-6 pr-md-0 border-right">
          <div class="card-body">
            <div class="box_content_height2">
              <div>
                <span class="font-weight-bold">Shop Information</span>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Cell
                    Number</label>
                  <span>+12517918588
                  </span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Tax Code (CF)</label>
                  <span>VAxzaRmYbIPcUY8L
                  </span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Genre</label>
                  <span>Male</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">County of Birth</label>
                  <span>Nuro</span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">City of
                    Birth</label>
                  <span>Sunflower
                  </span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Citizenship</label>
                  <span>Gibuti</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Telephone Number
                    (optional)</label>
                  <span>+19196134718</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 mt-3">
                <div class="border-dash"></div>
              </div>

              <div class="col-12 mt-2">
                <p class="default-color m-0 font-weight-bold">Address
                  Information</p>
              </div>

              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">Address</label>
                <span>86737 Steuber Crescent Suite 012 New Mozelle, UT
                  00442-8898</span>
              </div>
              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">Province of
                  Residence</label>
                <span>Asti</span>
              </div>
              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">City of
                  Residence</label>
                <span>Portacomaro</span>
              </div>
              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">Post_code</label>
                <span>824582430</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 pl-md-0">
          <div class="card-body">
            <div class="box_content_height">
              <div>
                <span class="font-weight-bold">Business Information</span>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Company
                    Name</label>
                  <span>Individual firm</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Company
                    Type</label>
                  <span>Lubowitz, Purdy and Hansen </span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Vat ID</label>
                  <span>29312177</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business
                    Phone</label>
                  <span>+17864160963</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business Mobile
                    Phone</label>
                  <span>+13084563276</span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business
                    Email</label>
                  <span>mkoepp@gmail.com</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 mt-3">
                <div class="border-dash"></div>
              </div>

              <div class="col-12 mt-2">
                <p class="default-color m-0 font-weight-bold">Address
                  Information</p>
              </div>

              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">Address</label>
                <span>43746 Jana Rue South Victorside, MI 26450</span>
              </div>
              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">Province of
                  Residence</label>
                <span>Agrigento</span>
              </div>
              <div class="col-lg-6 col-md-12 mt-2">
                <label class="d-block text-gray mb-0">City of
                  Residence</label>
                <span>Montevago</span>
              </div>
            </div>
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

    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    })
  },
}
</script>

<style lang="scss" scoped></style>
