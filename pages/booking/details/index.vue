<template>
  <div class="mt-3">
    <div>
      <nuxt-link to="/booking" class="BackButton">
        <img src="~/assets/icons/SVG/left.svg" width="22" /> Back
      </nuxt-link>
    </div>


    <div class="mt-3">
      <div class="card cardRounded">
        <div class="card-body">
          <div class="heading d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="font-weight-bold">Booking Details</h4>
            <span class="ticketStatus quoted">Ticket quoted</span>
          </div>
        </div>
      </div>
      <div class="booking_details_section">
        <div class="row">
          <div class="col-lg-6">
            <div class="booking_primary_assenger">
              <div class="flightDetails">
                <div class="details_content p-0">
                  <div class="classAndPlace">
                    <div class="from_to">
                      <span class="font-14">DAC</span>
                      <img src="~/assets/icons/SVG/right-black.svg" />
                      <span class="font-14">CXB</span>
                    </div>
                    <div class="class">Economy</div>
                  </div>
                  <div class="flight">
                    <div class="airline">
                      <div class="logo">
                        <img src="/images/airline1.png" alt="" />
                        <div>
                          <span class="name">Emirates</span>
                          <p class="m-0 text-gray font-12">
                            BS 153 | AT7
                          </p>
                        </div>
                      </div>
                      <div class="from_to_duration">
                        <div class="duration">
                          <span class="font-14 font-weight-bold">9:55</span>
                          <span class="font-12">01h 00m</span>
                          <span class="font-14 font-weight-bold">11:00</span>
                        </div>
                        <div class="line"></div>
                        <div class="fromTo">
                          <span class="font-14">DAC</span>
                          <span class="font-12">direct</span>
                          <span class="font-14">CXB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact_details">
                <h4 class="title">Contact Details</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Email</label>
                    <p class="m-0 font-14">mahfuz@exampl.com</p>
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Phone</label>
                    <p class="m-0 font-14">+8801768572658</p>
                  </div>
                </div>

                <p class="sendSMS">Send flight remainder and other details via <a href="">sms</a></p>
              </div>

              <div class="passenger">
                <h4 class="title">Primary passenger</h4>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Full Name</label>
                    <p class="m-0 font-14">Mr. Mahfuz Khan</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Nationality</label>
                    <p class="m-0 font-14">Bangladeshi</p>
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Date of Birth</label>
                    <p class="m-0 font-14">12/06/1992</p>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="font-14 text-gray mb-1">Passport or ID Number</label>
                    <p class="m-0 font-14">6568978453</p>
                  </div>

                  <div class="col-md-6">
                    <label class="font-14 text-gray mb-1">Expiration date </label>
                    <p class="m-0 font-14">No expiration</p>
                  </div>
                </div>
              </div>

              <div class="">
                <h4 class="title">Cabin or carry-on baggage</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="weight">
                      <div>1× cabin bag</div>
                      <div class="kg">
                        <span>7 kg</span>
                        <span>35 × 15 × 22 cm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3 mt-md-0">
                    <div class="weight">
                      <div>1× checked bag + baggage protection</div>
                      <div class="kg">
                        <span>20 kg</span>
                        <span>100 × 40 × 60 cm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 others_passerger_details">
            <div class="passengerItems">
              <div class="card">
                <div class="card-body">
                  <h4 class="title">Passenger 2 <span class="adult">Adult</span></h4>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Full Name</label>
                      <p class="m-0 font-14">Mr. Mahfuz Khan</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Nationality</label>
                      <p class="m-0 font-14">Bangladeshi</p>
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Date of Birth</label>
                      <p class="m-0 font-14">12/06/1992</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Passport or ID Number</label>
                      <p class="m-0 font-14">6568978453</p>
                    </div>

                    <div class="col-md-6">
                      <label class="font-14 text-gray mb-1">Expiration date </label>
                      <p class="m-0 font-14">No expiration</p>
                    </div>
                  </div>

                  <div class="">
                    <h4 class="title">Cabin or carry-on baggage</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="weight">
                          <div>1× cabin bag</div>
                          <div class="kg">
                            <span>7 kg</span>
                            <span>35 × 15 × 22 cm</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mt-3 mt-md-0">
                        <div class="weight">
                          <div>1× checked bag + baggage protection</div>
                          <div class="kg">
                            <span>20 kg</span>
                            <span>100 × 40 × 60 cm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="passengerItems">
              <div class="card">
                <div class="card-body">
                  <h4 class="title">Passenger 3 <span class="adult">Adult</span></h4>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Full Name</label>
                      <p class="m-0 font-14">Mr. Mahfuz Khan</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Nationality</label>
                      <p class="m-0 font-14">Bangladeshi</p>
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Date of Birth</label>
                      <p class="m-0 font-14">12/06/1992</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="font-14 text-gray mb-1">Passport or ID Number</label>
                      <p class="m-0 font-14">6568978453</p>
                    </div>

                    <div class="col-md-6">
                      <label class="font-14 text-gray mb-1">Expiration date </label>
                      <p class="m-0 font-14">No expiration</p>
                    </div>
                  </div>

                  <div class="">
                    <h4 class="title">Cabin or carry-on baggage</h4>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="weight">
                          <div>1× cabin bag</div>
                          <div class="kg">
                            <span>7 kg</span>
                            <span>35 × 15 × 22 cm</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mt-3 mt-md-0">
                        <div class="weight">
                          <div>1× checked bag + baggage protection</div>
                          <div class="kg">
                            <span>20 kg</span>
                            <span>100 × 40 × 60 cm</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="booking_details_footer">
        <a href="" class="btn text-danger">Cancel</a>
        <a href="javascript:void(0)" class="btn btn-outline-default text-primary" data-toggle="modal"
          data-target="#voidBooking" type="button">Void</a>
        <a href="" class="btn btn-outline-default text-primary">SSR Entry</a>
        <a href="" class="btn btn-primary">Issue Booking</a>
      </div>
    </div>

    <!-- Modal Void booking -->
    <div class="modal fade" id="voidBooking">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="d-flex align-items-start gap-8">
                <img src="~/assets/icons/SVG/remove-red.svg">

                <div class="confirmed_message_box">

                  <h3 class="title">Void Ticket?</h3>
                  <p class="descriptipons">Are you sure you want to cancel the booking? Type a cancelation reason to
                    confirm
                    cancel booking.</p>
                  <textarea name="" class="form-control" rows="3" placeholder="Type reason"></textarea>
                  <div class="d-flex justify-content-end gap-8">
                    <button class="btnAction text-dark" type="button" data-dismiss="modal" aria-label="Close"
                      data-toggle="modal" data-target="#somethingwrongBooking">Cancel</button>
                    <button class="btnAction bg-danger text-white" type="submit">Confirm</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Void booking -->
    <div class="modal fade" id="somethingwrongBooking">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="d-flex align-items-start gap-8">
                <img src="~/assets/icons/SVG/wrong.svg">

                <div class="confirmed_message_box">

                  <h3 class="title">Something went wrong!</h3>
                  <p class="descriptipons">The name of the person you are entering does not match the name of the person
                    in
                    the ticket booking.</p>
                  <div class="d-flex justify-content-end gap-8">
                    <button class="btnAction text-dark" type="button" data-dismiss="modal"
                      aria-label="Close">Cancel</button>
                    <button class="btnAction bg-primary text-white" type="submit">Try Again</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
}
</script>

<style lang="scss" scoped></style>
