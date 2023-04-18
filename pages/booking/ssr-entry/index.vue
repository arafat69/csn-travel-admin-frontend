<template>
  <div class="mt-3">
    <h3 class="header_title">Passport Details</h3>
    <form @submit.prevent="submitForm">
      <div class="row mt-2">
        <div class="col-md-7">
          <div class="card card-body">
            <div class="passport-content">
              <div class="passport-name">
                <span class="">Mr. Manik Mia</span>
              </div>
              <div class="passport_details">
                <div class="inputPart">
                  <div class="title">
                    <label class="font-14 mb-1">Title</label><br />
                    <select class="form-control">
                      <option value="mercedes">Mr.</option>
                      <option value="audi">Mst.</option>
                    </select>
                  </div>
                  <div class="input">
                    <label class="font-14 mb-1">First Name <span class="text-danger">*</span></label>
                    <input class="form-control" type="text" placeholder="Enter First Name" />
                  </div>
                  <div class="input">
                    <label class="font-14 mb-1">Last Name<span class="text-danger">*</span></label>
                    <input class="form-control" type="text" placeholder="Enter Last Name" />
                  </div>

                </div>

                <button type="button" class="additionalInfoBtn" data-toggle="collapse" href="#additionalInfo">Additional
                  info</button>

                <div class="collapse border-none" id="additionalInfo">
                  <div class="row">
                    <div class="col-md-6 mt-3">
                      <label class="font-14 mb-1">Nationality</label>
                      <select class="form-control">
                        <option value="mercedes">Argentina</option>
                        <option value="mercedes">Bangladesh</option>
                        <option value="mercedes">Italy</option>
                        <option value="mercedes">United States</option>
                        <option value="mercedes">United Kingdom</option>
                        <option value="audi">Turkey</option>
                      </select>
                    </div>

                    <div class="col-md-6 mt-3">
                      <label class="font-14 mb-1">Date Of Birth</label>
                      <input type="date" class="form-control" placeholder="Enter First Name" />
                    </div>

                    <div class="col-md-6 mt-3">
                      <label class="font-14 mb-1">Passport Or ID
                        Number</label>
                      <input type="text" class="form-control" placeholder="Enter Passport Or ID Number" />
                    </div>

                    <div class="col-md-6 mt-3">
                      <label class="font-14 mb-1">Expiration Date</label>
                      <div class="row align-items-center">
                        <div class="col-md-6 col-lg-7">
                          <input type="date" class="form-control" placeholder="Enter First Name" />
                        </div>
                        <div class="col-md-6 col-lg-5 mt-3 mt-md-0">
                          <div class="form-check-inline">
                            <input type="checkbox" name="" class="form-check-input" id="noExpire">
                            <label class="form-check-label" for="noExpire">
                              No expiration</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="passport_item mt-3">
              <div>Mrs. Aysha Khatun <span class="adult">Adult</span></div>
            </div>

            <div class="passport_item mt-3">
              <div>Rahat Khan <span class="adult">Child</span></div>
            </div>

            <div class="mt-4 d-flex justify-content-between">
              <nuxt-link to="/booking" class="goBack">
                <img src="~/assets/icons/SVG/left.svg" />
                Back
              </nuxt-link>
              <button type="submit" class="btnAction">Submit</button>
            </div>
          </div>
        </div>

        <!-- Preview box section -->
        <div class="col-md-5 mt-3 mt-md-0">
          <div class="previewBox d-flex justify-content-between flex-column">
            <div>
              <div class="header">
                <span>Preview</span>
              </div>
              <div class="card-body">
                <div class="preview-content">
                  <label class="m-0">Full Name</label>
                  <p>Mr. Manik Mia</p>
                </div>
                <div class="border_botton"></div>
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6 item">
                    <label>Title</label>
                    <p id="company_name_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6 item">
                    <label>First Name</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 item">
                    <label>Last Name</label>
                    <p id="vat_id_prv">--</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    submitForm(){
      this.$router.push('/booking')
    }
  },
}
</script>
<style lang="scss" scoped></style>
