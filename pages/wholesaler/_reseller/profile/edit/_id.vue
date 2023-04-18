<template>
  <div class="mt-3">
    <nuxt-link to="/wholesaler/1/profile/1" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22"> Back
    </nuxt-link>

    <form action="">
      <div class="card card-body mt-3">
        <h4 class="mb-4 font-weight-bolder">Edit Wholesaler</h4>
        <div class="row">
          <div class="col-lg-6">
            <h4 class="subTitle">Personal Information</h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="mb-1">Name</label>
                <input type="text" placeholder="Enter Name" class="form-control" value="" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Surname</label>
                <input type="text" placeholder="Enter Surname" class="form-control" value="" />
              </div>

              <div class="col-12 mb-3">
                <label class="mb-1">Tax code (CF)</label>
                <input type="text" placeholder="Enter Tax code (CF)" class="form-control" value="" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Genre</label>
                <input type="text" placeholder="Enter Genre" class="form-control" value="" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Date of Birth</label>
                <input type="date" class="form-control" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">County of Birth</label>
                <input type="text" placeholder="Enter County of Birth" class="form-control" value="" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">City of Birth</label>
                <input type="date" class="form-control" value="" />
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
                <input type="text" class="form-control" placeholder="Enter Telephone Number" value="" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Mobile Number
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Mobile Number" value="" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="mb-1">Email <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email" value="" />
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
                <input type="text" class="form-control" placeholder="Enter Mobile Residence Address" value="" />
              </div>
              <div class="col-md-4 mb-3">
                <label class="mb-1">Civic No
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Civic No" value="" />
              </div>

              <div class="col-md-12 mb-3">
                <label class="mb-1">Province of Residence
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Province of Residence" value="" />
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
                <input type="text" class="form-control" placeholder="Enter Postal Code" value="" />
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-3 mt-md-0">
            <h4 class="subTitle">Company Information</h4>
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
                <input type="text" placeholder="Enter Company Name" class="form-control" value="" />
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
                <input type="text" class="form-control" placeholder="Enter Company Address" value="" />
              </div>

              <div class="col-md-12 mb-3">
                <label class="mb-1">Company Province
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Company Province" value="" />
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
                <input type="text" class="form-control" placeholder="Enter Email" value="" />
              </div>

              <div class="col-md-6 mb-3">
                <label class="mb-1">Business Phone
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Telephone Number" value="" />
              </div>
              <div class="col-md-6 mb-md-0 mb-3">
                <label class="mb-1">Business Mobile
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Mobile Number" value="" />
              </div>

              <div class="col-md-12">
                <label class="mb-1">Company Email
                  <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter Email" value="" />
              </div>

              <div class="col-12 mt-4">
                <button type="submit" class="w-100 btnAction bg-primary">Save and Update</button>
              </div>
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
