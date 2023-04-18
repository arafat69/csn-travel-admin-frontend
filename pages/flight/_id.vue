<template>
  <div>
    <div class="details_header">
      <div class="details_progress">
        <img src="~/assets/icons/SVG/flight_to_confirm.svg" width="100%">
      </div>
    </div>

    <div class="flight_details_page_content">
      <div class="row">
        <div class="col-md-8">
          <div class="flight_content_sections">
            <div class="flightDetails">
              <button data-toggle="collapse" href="#collapseExample">
                <div class="title">Flight details</div>
                <div class="arrow">
                  <img src="~/assets/icons/SVG/arrow-up.svg" />
                </div>
              </button>

              <div class="collapse details show" id="collapseExample">
                <div class="details_content">
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
            </div>

            <!-- Contact Details -->
            <div class="card mt-3">
              <div class="card-header">
                <div class="title font-16 font-weight-bold">
                  Contact Details
                </div>
                <div class="des font-12 text-gray">
                  Receive booking confirmation & updates
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="font-14 mb-1" for="">Email</label>
                      <input type="text" name="" class="form-control" placeholder="Enter email" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="font-14 mb-1" for="">Phone
                        <span class="text-danger">*</span></label>
                      <input type="text" name="" class="form-control" placeholder="Enter phone number" />
                    </div>
                  </div>
                </div>
                <div class="d-flex gap-16 flex-wrap">
                  <div class="font-14 font-weight-bold">
                    Send flight remainder and other details via
                  </div>
                  <div>
                    <input type="checkbox" name="" id="SMS" />
                    <label class="font-14 m-0" for="SMS">SMS</label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="Email" />
                    <label class="font-14 m-0" for="Email">Email</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Primary passenger -->
            <div class="flightDetails mt-3 primaryPassenger-border">
              <button data-toggle="collapse" href="#primaryPassenger">
                <div class="title">Primary passenger</div>
                <div class="arrow">
                  <img src="~/assets/icons/SVG/arrow-up.svg" />
                </div>
              </button>

              <div class="collapse details show" id="primaryPassenger">
                <div class="details_content">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="form-group">
                        <label class="font-14 mb-1">Title</label>
                        <select name="" class="form-control">
                          <option value="Mr">Mr.</option>
                          <option value="Miss">Mrs.</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-8">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">First Name
                          <span class="text-danger">*</span></label>
                        <input type="text" name="" class="form-control" placeholder="Enter First Name" />
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Last Name</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Last Name" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1">Nationality</label>
                        <select name="" class="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Date of Birth</label>
                        <input type="date" name="" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Passport or ID Number</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Passport or ID Number" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label class="font-14 mb-1" for="">expiration date
                      </label>
                      <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-8">
                          <input type="date" name="" class="form-control" />
                        </div>
                        <div class="col-sm-6 mt-2 col-lg-4 mt-sm-0">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="expirationNo" />
                            <label class="font-14 form-check-label" for="expirationNo">No expiration
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="mb-2 font-weight-bold">
                    Cabin or carry-on baggage
                  </p>
                  <div class="badgeOrCabin">
                    <div class="bag border-primary">
                      <img src="~/assets/icons/SVG/bag.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× cabin bag
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="included">
                            <img src="~/assets/icons/SVG/ok.svg" />
                            Included</span>
                        </div>
                      </div>
                    </div>

                    <div class="bag border-primary">
                      <img src="~/assets/icons/SVG/bag-check.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× checked bag + baggage protection
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="font-14 font-weight-bold">€15</span>
                        </div>
                      </div>
                      <div class="chackBox">
                        <div class="dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Passenger 2 -->
            <div class="flightDetails mt-3">
              <button data-toggle="collapse" href="#passenger2">
                <div class="title">
                  Passenger 2 <span class="adult">Adult</span>
                </div>
                <div class="arrow">
                  <img src="~/assets/icons/SVG/arrow-up.svg" />
                </div>
              </button>

              <div class="collapse details show" id="passenger2">
                <div class="details_content">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="form-group">
                        <label class="font-14 mb-1">Title</label>
                        <select name="" class="form-control">
                          <option value="Mr">Mr.</option>
                          <option value="Miss">Miss.</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-8">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">First Name
                          <span class="text-danger">*</span></label>
                        <input type="text" name="" class="form-control" placeholder="Enter First Name" />
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Last Name</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Last Name" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1">Nationality</label>
                        <select name="" class="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Date of Birth</label>
                        <input type="date" name="" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Passport or ID Number</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Passport or ID Number" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label class="font-14 mb-1" for="">expiration date
                      </label>
                      <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-8">
                          <input type="date" name="" class="form-control" />
                        </div>
                        <div class="col-sm-6 mt-2 col-lg-4 mt-sm-0">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="expirationNo" />
                            <label class="font-14 form-check-label" for="expirationNo">No expiration
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="mb-2 font-weight-bold">
                    Cabin or carry-on baggage
                  </p>
                  <div class="badgeOrCabin">
                    <div class="bag border-primary">
                      <img src="~/assets/icons/SVG/bag.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× cabin bag
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="included">
                            <img src="~/assets/icons/SVG/ok.svg" />
                            Included</span>
                        </div>
                      </div>
                    </div>

                    <div class="bag border-gray">
                      <img src="~/assets/icons/SVG/bag-check.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× checked bag + baggage protection
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="font-14 font-weight-bold">€15</span>
                        </div>
                      </div>
                      <div class="chackBox">
                        <div class="dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Passenger 3 -->
            <div class="flightDetails mt-3">
              <button data-toggle="collapse" href="#passenger3">
                <div class="title">
                  Passenger 3 <span class="adult">Child</span>
                </div>
                <div class="arrow">
                  <img src="~/assets/icons/SVG/arrow-up.svg" />
                </div>
              </button>

              <div class="collapse details show" id="passenger3">
                <div class="details_content">
                  <div class="row">
                    <div class="col-lg-2 col-md-4">
                      <div class="form-group">
                        <label class="font-14 mb-1">Title</label>
                        <select name="" class="form-control">
                          <option value="Mr">Mr.</option>
                          <option value="Miss">Miss.</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-8">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">First Name
                          <span class="text-danger">*</span></label>
                        <input type="text" name="" class="form-control" placeholder="Enter First Name" />
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Last Name</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Last Name" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1">Nationality</label>
                        <select name="" class="form-control">
                          <option value="">Select</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Date of Birth</label>
                        <input type="date" name="" class="form-control" />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="font-14 mb-1" for="">Passport or ID Number</label>
                        <input type="text" name="" class="form-control" placeholder="Enter Passport or ID Number" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <label class="font-14 mb-1" for="">expiration date
                      </label>
                      <div class="row align-items-center">
                        <div class="col-sm-6 col-lg-8">
                          <input type="date" name="" class="form-control" />
                        </div>
                        <div class="col-sm-6 mt-2 col-lg-4 mt-sm-0">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="expirationNo" />
                            <label class="font-14 form-check-label" for="expirationNo">No expiration
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="mb-2 font-weight-bold">
                    Cabin or carry-on baggage
                  </p>
                  <div class="badgeOrCabin">
                    <div class="bag border-primary">
                      <img src="~/assets/icons/SVG/bag.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× cabin bag
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="included">
                            <img src="~/assets/icons/SVG/ok.svg" />
                            Included</span>
                        </div>
                      </div>
                    </div>

                    <div class="bag border-gray">
                      <img src="~/assets/icons/SVG/bag-check.svg" />
                      <div>
                        <p class="font-weight-bold font-14 mb-2">
                          1× checked bag + baggage protection
                        </p>
                        <p class="font-14 text-gray-400 mb-1">7 kg</p>
                        <div class="d-flex justify-content-between">
                          <span class="font-14 text-gray-400">35 × 15 × 22 cm</span>
                          <span class="font-14 font-weight-bold">€15</span>
                        </div>
                      </div>
                      <div class="chackBox">
                        <div class="dot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- right column -->
        <div class="col-md-4">
          <div class="fare_summery_section">
            <div class="card card-body">
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
                  <p class="m-0 font-14 font-weight-bold">€109.6</p>
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

            <!-- Have a coupon -->
            <div class="card mt-3">
              <div class="card-header">
                <div class="title font-16 font-weight-bold">
                  Have a coupon code?
                </div>
              </div>
              <div class="card-body">
                <form action="" class="d-flex gap-12">
                  <input type="text" name="" class="form-control" placeholder="Enter coupon code here" />
                  <button class="btn btn-outline-default px-lg-4 default-color">
                    Apply
                  </button>
                </form>
              </div>
            </div>

            <div class="mt-3">
              <button class="SubmitBtn w-100 default-bg text-white" data-toggle="modal" data-target="#confirmModal">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Confirm-->
    <div id="confirmModal" class="modal fade">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="confirmed_message_box text-center align-items-center">
              <div class="modal_check">
                <img src="~/assets/icons/SVG/ok_check.svg" width="30">
              </div>
              <h3 class="title text-center">Booked successfully</h3>
              <p class="descriptipons text-center">Successfully booked the ticket, it is now under review by the
                wholesale.</p>
              <button class="btn default-bg w-100 text-white font-14 font-weight-bold">Go to dashboard</button>
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

<style scoped>
.mt-3.container-fluid.px-lg-4{
  padding-top: 0 !important;
}
</style>
