<template>
  <div class="mt-3">
    <nuxt-link to="/reseller/profile/2" class="BackButton">
      <img src="~/assets/icons/SVG/left.svg" width="22" /> Back
    </nuxt-link>

    <div class="booking_header mt-3 align-items-center">
      <div class="item">
        <h4 class="m-0 font-weight-bold">Bookings<span class="text-primary">#Arthur_Shop</span></h4>
      </div>

      <div class="search item">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="search" placeholder="Search..."></b-form-input>
        </b-input-group>
      </div>

      <div class="item">
        <select name="" class="form-control">
          <option value="Airlines">Airlines</option>
          <option value="Airlines2">Airlines2</option>
          <option value="Airlines3">Airline3</option>
        </select>
      </div>

      <div class="item">
        <select name="" class="form-control">
          <option value="">Booking Type</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>

      <div class="select-date item">
        <date-range-picker v-model="dateRange"></date-range-picker>
      </div>
    </div>

    <div class="mt-2">
      <div class="table-responsive">
        <table class="table bookingTable">

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="first">First Class</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="economy">Economy</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="business">Business</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="first">First Class</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="economy">Economy</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

          <tr>
            <td class="date">22 Nov 2022</td>
            <td>
              <div class="id_class">
                <div class="id">ID: CNST265</div>
                <span class="business">Business</span>
              </div>
            </td>
            <td>
              <div class="booking">
                <div>Airline</div>
                <strong>Emirates</strong>
              </div>
            </td>
            <td>
              <div class="name_from_to">
                <div class="name">Mr. Mahfuz Khan</div>
                <div class="from_to">
                  Dhaka, Bangladesh (DAC)
                  <img src="~/assets/icons/SVG/right-black.svg" />
                  Cox’s Bazar (CXB)
                </div>
              </div>
            </td>
            <td class="time"><i class="fa fa-clock"></i> 1h 50m</td>
            <td class="passerger">
              <img src="~/assets/icons/passenger.svg" /> 1
            </td>
            <td>
              <div class="bag">
                <img src="~/assets/icons/luggages.svg" /> 1
              </div>
            </td>
            <td>
              <span class="issued">Issued</span>
            </td>
            <td>
              <a href="#" class="view">
                <img src="~/assets/icons/SVG/eyeBox.svg" />
              </a>
            </td>
          </tr>

        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { mapGetters } from "vuex";
export default {
  components: { DateRangePicker },
  data() {
    return {
      dateRange: {
        startDate: '2023-04-01',
        endDate: '2023-04-20'
      },
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    })
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped></style>
