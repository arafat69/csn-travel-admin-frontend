<template>
  <div class="mt-3">
    <nuxt-link to="/wholesaler" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22" /> Back
    </nuxt-link>

    <form action="">
      <div class="row mt-3">
        <div class="col-md-7 col-lg-8">
          <div class="card card-body">
            <h4 class="mb-4 font-weight-bolder">New Wholesalers</h4>
            <div id="accordionExample" class="accordion">
              <button class="collapseBtn btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Personal Information
                <i class="fas fa-angle-down"></i>
                <div class="rounded">
                  <i class="fas fa-circle"></i>
                </div>
              </button>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body pb-0 pr-0">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Name</label>
                      <input type="text" placeholder="Enter Name" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Surname</label>
                      <input type="text" placeholder="Enter Surname" class="form-control" />
                    </div>

                    <div class="col-12 mb-3">
                      <label class="mb-1">Tax code (CF)</label>
                      <input type="text" placeholder="Enter Tax code (CF)" class="form-control" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Genre</label>
                      <input type="text" placeholder="Enter Genre" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Date of Birth</label>
                      <input type="date" class="form-control" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">County of Birth</label>
                      <input type="text" placeholder="Enter County of Birth" class="form-control" />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">City of Birth</label>
                      <input type="date" class="form-control" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Citizenship
                        <span class="text-danger">*</span></label>
                      <select name="" class="form-control">
                        <option value="">Gibuti</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Telephone Number</label>
                      <input type="text" class="form-control" placeholder="Enter Telephone Number" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Mobile Number
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Mobile Number" />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Email
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Email" />
                    </div>

                    <div class="border-dot"></div>

                    <div class="col-12 mb-2 mt-2">
                      <h6 class="default-color font-weight-bold">
                        Address information
                      </h6>
                    </div>

                    <div class="col-md-8 mb-3">
                      <label class="mb-1">Residence Address
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Residence Address" />
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="mb-1">Civic No
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Civic No" />
                    </div>

                    <div class="col-md-12 mb-3">
                      <label class="mb-1">Province of Residence
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Province of Residence" />
                    </div>

                    <div class="col-md-6 mb-md-0 mb-3">
                      <label class="mb-1">City of Residence
                        <span class="text-danger">*</span></label>
                      <select name="" class="form-control">
                        <option value="">Monsano</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="mb-1">Postal Code
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Postal Code" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="divider_section">
                <div class="divide_line"></div>
              </div>

              <button class="collapseBtn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Company Information
                <i class="fas icon fa-angle-down"></i>
                <div class="rounded">
                  <i class="fas fa-circle"></i>
                </div>
              </button>

              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body pb-0 pr-0">
                  <div class="row">
                    <div class="col-md-8 mb-3">
                      <label class="mb-1">Company Type
                        <span class="text-danger">*</span></label>
                      <select name="" class="form-control">
                        <option value="">Gibuti</option>
                      </select>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label class="mb-1">VAT Number
                        <span class="text-danger">*</span></label>
                      <input type="text" placeholder="Enter VAT Number" class="form-control" />
                    </div>

                    <div class="col-12 mb-3">
                      <label class="mb-1">Company Name
                        <span class="text-danger">*</span></label>
                      <input type="text" placeholder="Enter Company Name" class="form-control" />
                    </div>

                    <div class="border-dot"></div>

                    <div class="col-12 mb-2 mt-2">
                      <h6 class="default-color font-weight-bold">
                        Address information
                      </h6>
                    </div>

                    <div class="col-md-12 mb-3">
                      <label class="mb-1">Company Address
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Company Address" />
                    </div>

                    <div class="col-md-12 mb-3">
                      <label class="mb-1">Company Province
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Company Province" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Company City
                        <span class="text-danger">*</span></label>
                      <select name="" class="form-control">
                        <option value="">Monsano</option>
                      </select>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Postal Code
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Email" />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="mb-1">Business Phone
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Telephone Number" />
                    </div>
                    <div class="col-md-6 mb-md-0 mb-3">
                      <label class="mb-1">Business Mobile
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Mobile Number" />
                    </div>

                    <div class="col-md-12">
                      <label class="mb-1">Company Email
                        <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="divider_section">
                <div class="divide_line"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Preview box section -->
        <div class="col-lg-4 col-md-5 mt-3 mt-md-0">
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
                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Name</label>
                    <p id="company_name_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Surname</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-12 item">
                    <label>Tax code (CF) </label>
                    <p id="vat_id_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Genre</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Date of Birth</label>
                    <p id="cf_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>County of Birth</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>City of Birth</label>
                    <p id="cf_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Citizenship</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Telephone Number</label>
                    <p id="cf_prv">--</p>
                  </div>

                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Mobile Number</label>
                    <p id="cf_prv">--</p>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-6 item">
                    <label>Email</label>
                    <p id="cf_prv">--</p>
                  </div>

                </div>
              </div>
            </div>

            <div class="p-3">
              <button type="submit" class="w-100 btnAction bg-primary">Submit</button>
            </div>

          </div>
        </div>

      </div>
    </form>
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
