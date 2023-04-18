<template>
  <div>
    <h3 class="header_title">Reports <span class="mini-text">/Airline Wise</span></h3>

    <!-- if wholeseler -->
    <div class="report_header">
      <h4 class="title">Airline Wise all Sales</h4>
      <div class="flex-grow-1" style="max-width: 400px;">
        <select name="" id="" class="form-control">
          <option value="all">All</option>
        </select>
      </div>
    </div>
    <!-- endif -->

    <div class="row mt-2">
      <div class="col-lg-8">
        <div class="card card-body">

          <div class="filtaring-section">
            <div class="search item">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="search" placeholder="Search..."></b-form-input>
              </b-input-group>
            </div>

            <div class="sort-list">
              <select class="form-control">
                <option value="">Sort By</option>
                <option value="">A</option>
                <option value="">A</option>
              </select>
            </div>
            <div class="select-date item">
              <date-range-picker v-model="dateRange"></date-range-picker>
            </div>
            <div class="dropdown action_btn">
              <button id="export_Box" class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                Export To
              </button>
              <ul class="dropdown-menu" aria-labelledby="export_Box">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another </a></li>
                <li><a class="dropdown-item" href="#">Something</a></li>
              </ul>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table">
              <thead class="thead-bg">
                <tr>
                  <th>Arilines</th>
                  <!-- if admin -->
                  <th>Reseller</th>
                  <!-- if wholeseler and admin -->
                   <th>Sold By</th>

                  <th>Total Ticket</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>
                <tr>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- if Admin -->
                  <td>Sharior Group</td>
                  <td>120</td>
                  <td>€967.00</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mt-3 mt-lg-0">
        <div class="card card-body">

          <!-- if wholeseler -->
          <TopTenWholesellerAirline />
          <!-- endIf -->

          <!-- <TopTenAirline/> -->

        </div>
      </div>
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
