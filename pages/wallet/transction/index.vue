<template>
  <div class="mt-3">
    <h3 class="header_title"><nuxt-link to="/wallet">Wallet</nuxt-link> <span class="mini-text">/Transactions</span></h3>
    <div class="card card-body mt-3">
      <client-only placeholder="Loading...">
        <div class="filtaring-section">
          <div class="bookingSearch">
            <b-input-group>
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input type="search" placeholder="Search..."></b-form-input>
            </b-input-group>
          </div>
          <div class="filterBtn">
            <img src="~/assets/icons/SVG/filter.svg">
          </div>
          <div class="sort-list">
            <select class="form-control">
              <option value="">Sort By</option>
              <option value="">A</option>
              <option value="">A</option>
            </select>
          </div>
          <div class="item">
            <date-range-picker v-model="dateRange"></date-range-picker>
          </div>
          <div class="dropdown action_btn">
            <button class="dropdown-toggle" type="button" id="export_Box" data-toggle="dropdown" aria-expanded="false">
              Export To
            </button>
            <ul class="dropdown-menu" aria-labelledby="export_Box">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another </a></li>
              <li><a class="dropdown-item" href="#">Something</a></li>
            </ul>
          </div>
        </div>

        <div class="table-responsive mt-2">
          <table class="table table-borderless">
            <thead class="thead-bg">
              <tr>
                <th>Operation</th>
                <th>Date</th>
                <th>ID</th>
                <th>Name</th>
                <th>Payment Method</th>
                <th>Debit</th>
                <th>Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="~/assets/icons/SVG/receive.svg"> Receive</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Ripon</td>
                <td>Card</td>
                <td></td>
                <td><span class="text-lime">+</span> €60.5</td>
              </tr>

              <tr>
                <td><img src="~/assets/icons/SVG/sell.svg"> Sell</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Abdullah</td>
                <td>Card</td>
                <td><span class="text-danger">-</span> €50.5</td>
                <td></td>
              </tr>

              <tr>
                <td><img src="~/assets/icons/SVG/receive.svg"> Receive</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Ripon</td>
                <td>Card</td>
                <td></td>
                <td><span class="text-lime">+</span> €60.5</td>
              </tr>

              <tr>
                <td><img src="~/assets/icons/SVG/sell.svg"> Sell</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Abdullah</td>
                <td>Card</td>
                <td><span class="text-danger">-</span> €50.5</td>
                <td></td>
              </tr>

              <tr>
                <td><img src="~/assets/icons/SVG/receive.svg"> Receive</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Ripon</td>
                <td>Card</td>
                <td></td>
                <td><span class="text-lime">+</span> €60.5</td>
              </tr>

              <tr>
                <td><img src="~/assets/icons/SVG/sell.svg"> Sell</td>
                <td>23 Nov 2022</td>
                <td>CSNT36583</td>
                <td>Abdullah</td>
                <td>Card</td>
                <td><span class="text-danger">-</span> €50.5</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
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
  methods: {

  },
}
</script>

<style lang="scss" scoped></style>
