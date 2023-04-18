<template>
  <div>
    <form @submit.prevent="submitFlightSearchForm()">
      <div class="search_filterBox card card-body">
        <div class="d-flex justify-content-start flex-wrap dropdown_section">
          <div class="selectBox">
            <select >
              <option value="Round-Trip">Round-Trip</option>
              <option value="One-Way">One-Way</option>
              <option value="Multi City">Multi City</option>
            </select>
          </div>

          <div class="selectBox">
            <select >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </select>
          </div>

          <div :class="passerLaggaseShow ? 'active' : ''" class="passenger_luggeses">
            <button class="dropdownBtn btn" type="button" @click="togglePasserLaggaseShow()">
              <div>
                <img src="~/~/assets/icons/passenger.svg" /> 2
              </div>
              <div>
                <img src="~/~/assets/icons/luggages.svg" /> 1
              </div>
            </button>
            <div v-if="passerLaggaseShow" class="dropdownMenu">
              <div class="passenger">
                <strong class="title">Passengers</strong>

                <div class="items">
                  <p class="type">Adult <span>(16-64)</span></p>
                  <div class="actions">
                    <button class="fontSm" type="button"><i class="fa fa-minus"></i></button>
                    <span>2</span>
                    <button type="button"><i class="fa fa-plus"></i></button>
                  </div>
                </div>

                <div class="items">
                  <p class="type">Senior <span>(65+)</span></p>
                  <div class="actions">
                    <button class="fontSm" type="button"><i class="fa fa-minus"></i></button>
                    <span>0</span>
                    <button type="button"><i class="fa fa-plus"></i></button>
                  </div>
                </div>

                <div class="items">
                  <p class="type">Child <span>(2-15)</span></p>
                  <div class="actions">
                    <button class="fontSm" type="button"><i class="fa fa-minus"></i></button>
                    <span>0</span>
                    <button type="button"><i class="fa fa-plus"></i></button>
                  </div>
                </div>
              </div>
              <div class="divider"></div>
              <div class="luggages">
                <div class="items">
                  <strong class="title">Luggages</strong>
                  <div class="actions">
                    <button class="fontSm" type="button"><i class="fa fa-minus"></i></button>
                    <span>1</span>
                    <button type="button"><i class="fa fa-plus"></i></button>
                  </div>
                </div>
              </div>
              <div class="items d-flex justify-content-between mt-1">
                <button class="resetBtn" type="button">Reset</button>
                <button class="doneBtn" @click="passerLaggaseShow = false">Done</button>
              </div>
            </div>
          </div>
        </div>

        <div class="searchInputSection">
          <div class="from_to">
            <input type="text"  class="form-control" placeholder="From Where?" />
            <input type="text"  class="form-control" placeholder="To Where?" />
            <div class="leftRightAngel">
              <img src="~/~/assets/icons/SVG/leftRight.svg" alt="" />
            </div>
          </div>
          <div class="serarch">
            <input type="date"  class="form-control" />
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i> Search Flight
            </button>
          </div>
        </div>
      </div>
    </form>

    <div class="row">
      <div class="col-lg-10">
        <div class="flight_searching_result_sections mt-2">
          <div class="filtering_ticketShorting_box">

            <div class="totalFound">
              <div class="d-flex justify-content-between align-items-center">
                <h4>Filter Your Results</h4>
                <button class="reset">Reset</button>
              </div>
              <p>275 results found</p>
            </div>

            <div class="itemBox">
              <div class="title">Flexible Tickets</div>
              <div class="lable">
                <input id="Refundable" type="checkbox">
                <label for="Refundable">Refundable</label>
              </div>
            </div>

            <div class="itemBox">
              <div class="title">Stops</div>
              <div class="lable">
                <input id="Direct" type="checkbox">
                <label for="Direct">Direct</label>
              </div>
              <div class="lable">
                <input id="1Stop" type="checkbox">
                <label for="1Stop">1 Stop</label>
              </div>
              <div class="lable">
                <input id="2Stop" type="checkbox">
                <label for="2Stop">2+ Stop</label>
              </div>
            </div>

            <div class="itemBox">
              <div class="title">Price</div>
              <div class="mb-3">
                <section class="range-slider">
                  <span class="full-range"></span>
                  <span class="incl-range"></span>
                  <input name="rangeOne" value="300" min="300" max="5000" step="1" type="range">
                  <input name="rangeTwo" value="5000" min="300" max="5000" step="1" type="range">
                </section>
                <div class="d-flex justify-content-between">
                  <span class="output outputOne"></span>
                  <span class="output outputTwo"></span>
                </div>
              </div>
            </div>

            <div class="itemBox">
              <div class="title">Shift</div>
              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Morning" type="checkbox">
                  <label for="Morning">Morning</label>
                </div>
                <span class="text-gray-400 font-12">06:00 - 12:00</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Day" type="checkbox">
                  <label for="Day">Day</label>
                </div>
                <span class="text-gray-400 font-12">12:00 - 05:00</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Evening" type="checkbox">
                  <label for="Evening">Evening</label>
                </div>
                <span class="text-gray-400 font-12">05:00 - 08:00</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Night" type="checkbox">
                  <label for="Night">Night</label>
                </div>
                <span class="text-gray-400 font-12">08:00 - 01:00</span>
              </div>
            </div>

            <div class="itemBox">
              <div class="title">Airlines</div>
              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="British" type="checkbox">
                  <label for="British">British Airways</label>
                </div>
                <span class="text-gray font-12">€365.5</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Emirates" type="checkbox">
                  <label for="Emirates">Emirates</label>
                </div>
                <span class="text-gray font-12">€365.5</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Gulf" type="checkbox">
                  <label for="Gulf">Gulf Air</label>
                </div>
                <span class="text-gray font-12">€365.5</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="IndiGo" type="checkbox">
                  <label for="IndiGo">IndiGo</label>
                </div>
                <span class="text-gray font-12">€365.5</span>
              </div>

              <div class="d-flex justify-content-between w-100 align-items-center">
                <div class="lable">
                  <input id="Jazeera" type="checkbox">
                  <label for="Jazeera">Jazeera Airways</label>
                </div>
                <span class="text-gray font-12">€365.5</span>
              </div>
            </div>

            <div class="w-100">
              <button class="semoreBtn">Show More</button>
            </div>
          </div>

          <div class="searching_resultData_box">
            <div class="header">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Cheapest
                    <div class="from">From $150.5</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Recommended
                    <div class="from">From $180.0</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Best deal
                    <div class="from">From $200.0</div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Fastest
                    <div class="from">From $200.0</div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="resultData_content">

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline1.png" alt="">
                    <span class="name">Emirates</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/1" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline2.png">
                    <span class="name">Singapore Airlines</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/2" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline3.png">
                    <span class="name">Singapore Airlines</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/3" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline1.png" alt="">
                    <span class="name">Emirates</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/4" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline2.png">
                    <span class="name">Singapore Airlines</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/5" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flight">
                <div class="airline">
                  <div class="logo">
                    <img src="/images/airline3.png">
                    <span class="name">Singapore Airlines</span>
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
                <div class="price_with_cta">
                  <div class="price_box">
                    <div class="price">€365.5</div>
                    <span>per person</span>
                    <span>(Incl. VAT+TAX)</span>
                  </div>
                  <div>
                    <nuxt-link to="/flight/6" class="btn select_btn">
                      Select <img src="~/assets/icons/SVG/right.svg" width="18">
                    </nuxt-link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2 mt-2">
        <img src="/images/ads.png" alt="" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passerLaggaseShow: false,

    }
  },
  methods: {
    togglePasserLaggaseShow() {
      this.passerLaggaseShow = !this.passerLaggaseShow
    },
    submitFlightSearchForm() {
      alert('ok submit');
    }

  },

}
</script>

<style lang="scss" scoped></style>
