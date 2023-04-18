<template>
  <div>
    <div class="row">
      <div class="col-md-9">
      <form @submit.prevent="submitFlightSearchForm()">
        <div class="search_filterBox card card-body">
          <div class="d-flex justify-content-start flex-wrap dropdown_section">
            <div class="selectBox">
              <select name="">
                <option value="Round-Trip">Round-Trip</option>
                <option value="One-Way">One-Way</option>
                <option value="Multi City">Multi City</option>
              </select>
            </div>

            <div class="selectBox">
              <select name="">
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>

            <div :class="passerLaggaseShow ? 'active' : ''" class="passenger_luggeses">
              <button class="dropdownBtn btn" type="button" @click="togglePasserLaggaseShow()">
                <div>
                  <img src="~/assets/icons/passenger.svg" /> 2
                </div>
                <div>
                  <img src="~/assets/icons/luggages.svg" /> 1
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
              <input type="text" name="" class="form-control" placeholder="From Where?" />
              <input type="text" name="" class="form-control" placeholder="To Where?" />
              <div class="leftRightAngel">
                <img src="~/assets/icons/SVG/leftRight.svg" alt="" />
              </div>
            </div>
            <div class="serarch">
              <input type="date" name="" class="form-control" />
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-search"></i> Search Flight
              </button>
            </div>
          </div>
        </div>
      </form>
        <div class="card card-body mt-4">
          <h5 class="title">The best flight deals from ROME</h5>

          <VueSlickCarousel v-bind="Settings" class="flight_slider">
            <div>
              <div class="items">
                <img src="/images/slide1.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide2.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide3.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide4.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide1.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide2.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
            <div>
              <div class="items">
                <img src="/images/slide2.png" alt="" />
                <div class="content">
                  <span>Bangladesh</span>
                  <span>From €677</span>
                </div>
              </div>
            </div>
          </VueSlickCarousel>

        </div>
      </div>
      <div class="col-md-3">
        <div class="card card-body mt-4">
          <div class="dashboard_items">
            <span>Today’s Booking</span>
            <h4>24</h4>
          </div>

          <div class="dashboard_items mt-3">
            <span>Today’s Sale</span>
            <h4>22</h4>
          </div>

          <div class="dashboard_items mt-3">
            <span>Expiring Booking</span>
            <h4>02</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden py-4">
      <img src="~/assets/icons/SVG/divider.svg" alt="" />
    </div>

    <div class="ads_sections mb-2">
      <div class="row">
        <div class="col-md-9">
          <div class="ads">
            <div class="title">Offers</div>
            <div class="descriptipons">
              Promotions, deals and special offers for you
            </div>
            <div class="row px-2 mt-2">
              <div class="col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/slide1.png" />
                  <div class="content">
                    <div class="save bg-red">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/slide1.png" />
                  <div class="content">
                    <div class="save bg-violet">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/offer1.png" />
                  <div class="content">
                    <div class="save bg-blue">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/offer2.png" />
                  <div class="content">
                    <div class="save bg-blue">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/offer3.png" />
                  <div class="content">
                    <div class="save bg-blue">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 col-lg-4 col-md-6 col-sm-6 mb-3 px-2">
                <div class="adsitems">
                  <img src="/images/offer1.png" />
                  <div class="content">
                    <div class="save bg-blue">Save up to</div>
                    <p>
                      <span class="price">$40</span> off our fare
                    </p>
                    <div class="sub">On domestic flights.</div>
                    <div class="get_promo">
                      <div>Get Promo Code</div>
                      <span class="copyBtn">
                        <img src="~/assets/icons/SVG/copy.svg" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <img src="/images/ads.png" alt="" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },

  data() {
    return {
      passerLaggaseShow: false,

      // slick slider options
      Settings: {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }
    }
  },
  mounted() {

  },
  methods: {
    togglePasserLaggaseShow() {
      this.passerLaggaseShow = !this.passerLaggaseShow
    },
    submitFlightSearchForm(){
     this.$router.push('/flight')
    }

  },
}
</script>

<style lang="scss" scoped></style>
