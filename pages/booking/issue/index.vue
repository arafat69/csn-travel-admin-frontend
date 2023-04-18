<template>
  <div class="mt-3">
    <h3 class="header_title">Issue Tickets</h3>

    <div class="row">
      <div class="col-md-6">
        <div class="card card-body">
          <div class="issue_ticket_section">
            <div class="header">
              <h4>Passenger Basic Info</h4>
              <p>Please confirm all information before completing transaction.</p>
            </div>
            <div class="body">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="font-14 text-gray mb-1">Full Name</label>
                  <p class="m-0 font-14">Mr. Mahfuz Khan</p>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="font-14 text-gray mb-1">Email</label>
                  <p class="m-0 font-14">mahfuz@exampl.com</p>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="font-14 text-gray mb-1">Phone</label>
                  <p class="m-0 font-14">+8801768572658</p>
                </div>

                <div class="col-md-6 mb-3">
                  <label class="font-14 text-gray mb-1">Address</label>
                  <p class="m-0 font-14">Mohammadpur, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flight_detail mt-3">
          <div class="title">Flight details</div>
          <div class="details_content">
            <div class="from_to">
              <span class="font-14">DAC</span>
              <img src="~/assets/icons/SVG/right-black.svg" />
              <span class="font-14">CXB</span>
            </div>

            <div class="airline">
              <span class="name">Emirates</span>
              <p class="m-0 text-gray font-12">
                BS 153 | AT7
              </p>
              <span class="class">Economy</span>
            </div>
            <div class="duration">
              <span class="font-14 font-weight-bold">9:55</span>
              <span class="font-12">01h 00m</span>
              <span class="font-14 font-weight-bold">11:00</span>
            </div>
          </div>
        </div>

        <div class="card card-body mt-3">
          <div class="fare_summery">
            <div class="title">Fare Summary</div>

            <div class="itemBox">
              <p class="m-0 font-14">
                Adult<span>x</span> <span>2 Passenger</span>
              </p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">Primary passenger name</p>
              <p class="m-0 font-14 font-weight-bold">€365.5</p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">Passenger 2 name</p>
              <p class="m-0 font-14 font-weight-bold">€365.5</p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">TAX</p>
              <p class="m-0 font-14 font-weight-bold">€365.5</p>
            </div>

            <div class="itemBox">
              <p class="m-0 font-14">
                Child<span>x</span> <span>1 Passenger</span>
              </p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">Passenger 3 name</p>
              <p class="m-0 font-14 font-weight-bold">195.5</p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">TAX</p>
              <p class="m-0 font-14 font-weight-bold">€42</p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14">
                Checked baggage + Lost baggage protection
              </p>
              <p class="m-0 font-14 font-weight-bold">€346.6</p>
            </div>

            <div class="divider"></div>

            <div class="itemBox">
              <p class="m-0 font-14">Sub-Total</p>
              <p class="m-0 font-14 font-weight-bold">
                €1273.5
              </p>
            </div>
            <div class="itemBox">
              <p class="m-0 font-14 text-danger">Discount</p>
              <p class="m-0 font-14 font-weight-bold text-danger">
                €73.5
              </p>
            </div>
            <div class="border-top border-dark"></div>
            <div class="itemBox">
              <p class="m-0 font-14">
                Total Payable
                <span class="text-gray">(for 3 Passengers)</span>
              </p>
              <p class="m-0 font-14 font-weight-bold">
                €1245.0
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Method card -->
      <div class="col-md-6 mt-3 mt-md-0">
        <form action="">
          <div class="card card-body">
            <h5 class="">Payment Method</h5>
            <div class="payment_method">

              <input type="radio" name="payment_method" id="cash" class="btn-check" autocomplete="off">
              <label for="cash" class="method">
                <div class="type">
                  <div class="chackBox">
                    <div class="dot"></div>
                  </div>
                  Cash
                </div>
                <div>
                  <img src="/images/cash.svg">
                </div>
              </label>

              <div>
                <input type="radio" name="payment_method" id="card" class="btn-check" autocomplete="off">
                <label for="card" class="method" data-toggle="collapse" href="#cardPayment">
                  <div class="type">
                    <div class="chackBox">
                      <div class="dot"></div>
                    </div>
                    Card
                  </div>
                  <div>
                    <img src="/images/card-pay.svg">
                  </div>
                </label>

                <div class="collapse cardDetails" id="cardPayment">
                  <div>
                    <div class="form-group card-owner">
                      <label class="mb-1 font-14">Card Owner</label>
                      <select name="" class="form-control">
                        <option value="">Customer</option>
                      </select>
                    </div>

                    <p class="font-weight-bold mb-2">Card Details</p>

                    <div class="form-group">
                      <label class="mb-1 font-14">Card Number</label>
                      <input type="text" name="" class="form-control" placeholder="Enter Card Number">
                    </div>

                    <div class="form-group">
                      <label class="mb-1 font-14">Card Holder’s Name</label>
                      <input type="text" name="" class="form-control" placeholder="Enter Card Holder’s Name">
                    </div>

                    <div class="row">
                      <div class="col-lg-6 mb-3 mb-lg-0">
                        <label class="mb-1 font-14">Expiration Date</label>
                        <div class="row">
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <select name="" class="form-control">
                              <option value="">Select Month</option>
                            </select>
                          </div>
                          <div class="col-sm-6 mb-3 mb-sm-0">
                            <select name="" class="form-control">
                              <option value="">Select Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-3 mb-lg-0">
                        <label class="mb-1 font-14">CVV</label>
                        <input type="text" name="" class="form-control" placeholder="Enter CVV">
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <button class="SubmitBtn default-bg text-white" type="button" v-b-modal.confirmModal>Confirm & Pay</button>
            </div>
          </div>
        </form>
      </div>
    </div>


    <b-modal id="confirmModal" centered  hide-footer hide-header>
      <div class="confirmed_message_box text-center align-items-center">
        <div class="modal_check">
          <img src="~/assets/icons/SVG/ok_check.svg" width="30">
        </div>
        <h3 class="title text-center">Payment successful</h3>
        <div class="d-flex flex-column w-100">
          <div class="info">
            <span>Date and Time</span>
            <span>05 Jan 2023 - 11:51</span>
          </div>
          <div class="info">
            <span>Payment Method</span>
            <span>Card - Customer</span>
          </div>
          <div class="info">
            <span>Paid Amount</span>
            <span>$305.75</span>
          </div>
          <div class="info">
            <span>Transaction ID</span>
            <span>59895625323</span>
          </div>
        </div>
        <button class="btn default-bg w-100 text-white font-14 font-weight-bold" @click="backHome()">View Ticket</button>
      </div>
    </b-modal>


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
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
  },
  methods: {
    backHome() {
      this.$bvModal.hide('confirmModal')
      this.$router.push('/booking')
    }
  },
}
</script>

<style lang="scss" scoped></style>
