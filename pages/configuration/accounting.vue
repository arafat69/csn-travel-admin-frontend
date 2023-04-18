<template>
  <div>
    <div class="mt-3">
      <h4 class="header_title">Configuration</h4>
    </div>
    <div class="card card-body">
      <div class="Configaration_header">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration">
              Business Info
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration/theme">
              Theme
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration/template">
              Template
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/configuration/accounting">
              Accounting
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="configaration_contents mt-4">
        <h3>Accounting</h3>

        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="mt-3">
              <label for="" class="font-weight-bold font-16 ">Invoice
                Management</label>
              <input class="form-control" type="text" placeholder="Enter invoice key">
            </div>
            <div class="row">
              <div class="col-md-6 mt-3">
                <label for="" class="font-weight-bold font-16 ">Default Agency Fees</label>
                <div class="position-relative">
                  <input class="form-control" type="text" placeholder="Set default agency fees ()">
                  <span class="persentences">%</span>
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <label for="" class="font-weight-bold font-16 ">Default VAT</label>
                <div class="position-relative">
                  <input class="form-control" type="text" placeholder="Set default VAT">
                  <span class="persentences">%</span>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <label for="" class="font-weight-bold font-16 ">Law Reference</label>
              <input class="form-control" type="text" placeholder="Enter law reference">
            </div>

            <!-- bank details card -->
            <div v-if="!enableEdit" class="bankDetails">
              <div class="header">
                <h4>Bank Details</h4>
                <button class="edit_btn" @click="enableEdit = !enableEdit">
                  <img src="~/assets/icons/SVG/edit.svg" alt=""> Edit
                </button>
              </div>
              <div class="bank_card">
                <div class="row">
                  <div class="col-md-6 mt-3">
                    <label class="text-gray d-block mb-0">Bank Name</label>
                    <span>Dutch Bangla Bank Ltd.</span>
                  </div>
                  <div class="col-md-6 mt-3">
                    <label class="text-gray d-block mb-0">Account No.</label>
                    <span>XXXXXXX6987</span>
                  </div>
                </div>
              </div>
            </div>

            <!--edit bank details card -->
            <div v-else class="bankDetails">
              <div class="header">
                <h4>Bank Details</h4>
                <button class="save_btn" @click="enableEdit = !enableEdit">
                  <img src="~/assets/icons/SVG/save.svg" alt=""> Save
                </button>
              </div>
              <div class="bank_card">
                <div class="row">
                  <div class="col-md-6 mt-3">
                    <label class="">Bank Name</label>
                    <input class="form-control" type="text" placeholder="Enter bank Name">
                  </div>
                  <div class="col-md-6 mt-3">
                    <label class="">IBAN</label>
                    <input class="form-control" type="text" placeholder="Enter IBAN">
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enableEdit: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
