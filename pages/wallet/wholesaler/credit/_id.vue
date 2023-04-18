<template>
  <div class="mt-3">
    <nuxt-link to="/wallet/wholesaler" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22" /> Back
    </nuxt-link>
    <div class="card">
      <div class="card-body">
        <h3 class="title">Add Credit to <span class="text-primary">#Arthur Shop</span></h3>
        <div class="row">
          <div class="col-lg-6">
            <div class="box_content">
              <div><span class="font-weight-bold">Shop Information</span></div>
              <div class="row">
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Operators Name</label>
                  <span>Arthur Shop</span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Cell Number</label>
                  <span>+12517918588</span>
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
                  <label class="d-block text-gray mb-0">City of Birth</label>
                  <span>Sunflower
                  </span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Citizenship</label>
                  <span>Gibuti</span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Telephone Number(optional)</label>
                  <span>+19196134718</span>
                </div>

              </div>
            </div>

            <div class="box_content">
              <div><span class="font-weight-bold">Business Information</span></div>
              <div class="row">
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Company Name</label>
                  <span>Lubowitz, Purdy and Hansen</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Company Type</label>
                  <span>Individual firm</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Vat ID</label>
                  <span>29312177</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business Phone</label>
                  <span>+17864160963</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business Mobile Phone</label>
                  <span>+13084563276</span>
                </div>

                <div class="col-lg-6 col-md-12 mt-3">
                  <label class="d-block text-gray mb-0">Business Email</label>
                  <span>mkoepp@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="credit-box-content">
              <div class="title">Enter Credit Amount</div>
              <div class="input-box">
                <input type="text" value="200">
              </div>
              <button v-b-modal.creditconfirmModal class="submitBtn btn btn-primary">Add Credit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="creditconfirmModal" size="sm" centered hide-footer hide-header>
      <div class="confirmed_message_box text-center align-items-center">
        <div class="modal_check">
          <img src="~/assets/icons/SVG/ok_check.svg" width="30">
        </div>
        <h3 class="title text-center">Credit Added Successfully</h3>
        <div class="d-flex flex-column w-100">
          <div class="info">
            <span>Date and Time</span>
            <span>05 Jan 2023 - 11:51</span>
          </div>
          <div class="info">
            <span>To</span>
            <span>Arthur Shop</span>
          </div>
          <div class="info">
            <span>Credit Amount</span>
            <span>$305.75</span>
          </div>
          <div class="info">
            <span>Transaction ID</span>
            <span>59895625323</span>
          </div>
          <div class="info border-0">
            <span>Transaction Date</span>
            <span>21 Apr, 2023</span>
          </div>

          <div class="message">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
            form
            of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder
            before final copy is available.
          </div>
        </div>
        <button class="btn default-bg w-100 text-white font-14 font-weight-bold" @click="backHome()">OK</button>
      </div>
    </b-modal>

  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$bvModal.hide('creditconfirmModal')
      this.$toast.success('Added Successfully')
    }
  },
}
</script>

<style scoped>
.message {
  background: #F3F4F6;
  border-radius: 8px;
  padding: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: start;
}

.submitBtn {
  width: 320px;
}

.title {
  font-size: 24px;
  font-weight: 700;
}

.box_content {
  padding: 16px 0px 12px 12px;
}

.credit-box-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 16px;
  background: #F9FAFB;
  border-radius: 8px;
  height: 100%;
}

.credit-box-content .title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  margin: 0;
  color: #111827;
  padding: 0;
}

.input-box {
  background: #E5E7EB;
  border-radius: 8px;
  padding: 24px 32px;
}

.input-box input {
  border: none;
  outline: none;
  background: #E5E7EB;
  border-bottom: 1px solid #9CA3AF;
  height: 32px;
  font-size: 20px;
  text-align: center;
}

@media(max-width:540px) {
  .submitBtn {
    width: 100%;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .credit-box-content .title {
    font-size: 20px;
  }

  .input-box input {
    width: 100%;
  }
}
</style>
