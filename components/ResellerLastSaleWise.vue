<template>
  <div>
    <h3 class="header_title">Reports <span class="mini-text">/Last Sale</span></h3>

    <!-- if wholeseler -->
    <div class="report_header">
      <h4 class="title">All Reseller’s Sales</h4>
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
                  <th>Date</th>
                  <th>ID</th>
                  <!-- if wholeseler -->
                  <th>Sold By</th>
                  <!-- endif -->
                  <th>Payment Method</th>
                  <th>Price</th>
                  <th>Profit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>
                <tr>
                  <td>01/01/2023 | 09:23</td>
                  <td>CSNT20365</td>
                  <!-- if wholeseler -->
                  <td>Sharior Group</td>
                  <!-- endif -->
                  <td>Cash</td>
                  <td>€1035.6</td>
                  <td>€236.5</td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mt-3 mt-lg-0">
        <div class="card">

          <div class="card-header d-flex justify-content-between gap-2 flex-wrap">
            <div>
              <h5 class="font-18 m-0">Yearly Sale</h5>
              <p class="font-14 m-0 text-gray">Compare last year and this year sale</p>
            </div>
            <div class="year-list flex-grow-1 flex-sm-grow-0">
              <select class="form-control">
                <option value="">2022-2023</option>
                <option value="">2022-2021</option>
                <option value="">2021-2020</option>
              </select>
            </div>
          </div>
          <div class="card-body pt-0 p-1">
            <client-only placeholder="Loading...">
              <apexChart :options="options" :series="series"></apexChart>
            </client-only>
          </div>
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

      // chart js
      options: {
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          },
        },
        markers: {
          size: 4
        },
        colors: ['#3B82F6', '#F59E0B'],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.4,
            stops: [0, 90, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        }
      },

      series: [{
        name: 'Last Year (2022)',
        data: [31, 40, 28, 51, 42, 82, 56],
      }, {
        name: 'Current Year (2023)',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
