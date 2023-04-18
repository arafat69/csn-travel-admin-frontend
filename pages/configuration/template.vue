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
            <nuxt-link class="nav-link active" to="/configuration/template">
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
        <div class="mb-3">
          <h3 class="font-weight-bold">Ticket Template</h3>
          <p class="font-18">Your and your all-seller ticket templates that customers will
            receive a print copy.</p>
        </div>

        <div>
          <div class="row">

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/default.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="" class="btn btn-outline-primary">
                    <img src="~/assets/icons/SVG/check.svg" alt=""> Default
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-02.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-2.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-03.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-3.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-04.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-4.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-05.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-5.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-06.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-6.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-07.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-07.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-08.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-08.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-09.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-09.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3">
              <div class="pdf_template">
                <div class="pdf_image">
                  <img src="/PDF-template/images/variation-10.png" alt="" width="100%">
                </div>
                <div class="view_setBtn">
                  <a href="/PDF-template/variation-10.pdf" target="_blank" class="btn btn-outline-primary">View</a>
                  <a href="" class="btn btn-primary">Apply</a>
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

}
</script>

<style lang="scss" scoped></style>

