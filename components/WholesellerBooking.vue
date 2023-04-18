<template>
  <div class="mt-3">
    <h3 class="header_title">All Booking</h3>

    <div class="booking_header">
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
          <option value="Reseller">Reseller</option>
          <option value="Reseller2">Reseller2</option>
          <option value="Reseller3">Reseller3</option>
        </select>
      </div>

      <!-- if admin -->
      <div class="item">
        <select name="" class="form-control">
          <option value="Wholesaler">Wholesaler</option>
          <option value="Wholesaler2">Wholesaler2</option>
          <option value="Wholesaler3">Wholesaler3</option>
        </select>
      </div>
      <!-- end -->

      <div class="item">
        <select name="" class="form-control">
          <option value="">Booking Type</option>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First Class">First Class</option>
        </select>
      </div>

      <div class="status">
        <select name="" class="form-control">
          <option value="">Status</option>
          <option value="Economy">Issue</option>
        </select>
      </div>

      <div class="item">
        <date-range-picker v-model="dateRange"></date-range-picker>
      </div>
    </div>

    <div class="mt-3">
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
                <div>Booked by</div>
                <strong>RM Assistenza</strong>
              </div>
            </td>
            <!-- if admin -->
            <td>
              <div class="booking">
                <div>Wholesaler</div>
                <strong>CSN Firenze</strong>
              </div>
            </td>
            <!-- end -->
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
export default {
  components: {DateRangePicker},
  data () {
      return {
        dateRange: {
          startDate: '2023-04-01',
          endDate: '2023-04-20'
        },
      }
    },
    methods: {

    },
}
</script>

<style scoped>

</style>
