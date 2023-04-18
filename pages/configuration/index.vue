<template>
  <div>
    <div class="mt-3">
      <h4 class="header_title">Configuration</h4>
    </div>
    <div class="card card-body">
      <div class="Configaration_header">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/configuration">
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
            <nuxt-link class="nav-link" to="/configuration/accounting">
              Accounting
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="configaration_contents mt-4">
        <div class="row">
          <div class="col-lg-6 col-md-8">
            <form action="">
              <div class="logo_section">
                <div class="logo">
                  <img src="/images/travel-logo.svg" alt="">
                </div>
                <div class="upload_logo">
                  <input type="file" name="logo" id="travelLogo" style="display: none;">
                  <label for="travelLogo">Upload New Logo</label>
                  <a href="javascript:void(0)">
                    <img src="~/assets/icons/SVG/delete.svg">
                  </a>
                </div>
              </div>
              <div class="mt-4">
                <div class="mb-3">
                  <label class="mb-1">Company Name <span class="text-danger">*</span></label>
                  <input type="text" name="" class="form-control" placeholder="Company Name">
                </div>
                <div class="mb-3">
                  <label class="mb-1">Business Email <span class="text-danger">*</span></label>
                  <input type="text" name="" class="form-control" placeholder="Business Email">
                </div>
                <div class="mb-3">
                  <label class="mb-1">Phone <span class="text-danger">*</span></label>
                  <input type="text" name="" class="form-control" placeholder="Phone">
                </div>
                <div class="mb-3">
                  <label class="mb-1">Address <span class="text-danger">*</span></label>
                  <input type="text" name="" class="form-control" placeholder="Address">
                </div>
              </div>
              <button class="btn default-bg text-white py-2 px-4 mt-3" type="submit">Save & Change</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
