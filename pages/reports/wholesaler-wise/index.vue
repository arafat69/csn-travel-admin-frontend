<template>
  <client-only placeholder="Loading...">
    <div class="mt-3">
      <h3 class="header_title">Reports <span class="mini-text">/Wholesaler Wise</span></h3>

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

              <div class="item">
                <date-range-picker v-model="dateRange"></date-range-picker>
              </div>
              <div class="dropdown action_btn">
                <button class="dropdown-toggle" type="button" id="export_Box" data-toggle="dropdown"
                  aria-expanded="false">
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
                    <th>Wholesaler</th>
                    <th>Total Ticket</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Arthur Shop </td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Moshe Shop</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>RM Assistenza</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Arthur Shop </td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Moshe Shop</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>RM Assistenza</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Arthur Shop </td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Moshe Shop</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>RM Assistenza</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>RM Assistenza</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Arthur Shop </td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>Moshe Shop</td>
                    <td>120</td>
                    <td>€967.00</td>
                  </tr>
                  <tr>
                    <td>RM Assistenza</td>
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
            <div class="fare_summery topAirline">
              <div class="title mb-2">Top 10 Wholesaler</div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/Shop logo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Arthur Shop</p>
                    <p class="m-0 font-14">2658</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€9167.00</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/shopLogo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Moshe Shop</p>
                    <p class="m-0 font-14">2121</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€8040.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/airline3.png">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">RM Assistenza</p>
                    <p class="m-0 font-14">1987</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€7380.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/Shop logo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Arthur Shop</p>
                    <p class="m-0 font-14">2658</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€9167.00</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/shopLogo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Moshe Shop</p>
                    <p class="m-0 font-14">2121</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€8040.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/airline3.png">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">RM Assistenza</p>
                    <p class="m-0 font-14">1987</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€7380.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/Shop logo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Arthur Shop</p>
                    <p class="m-0 font-14">2658</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€9167.00</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/shopLogo.svg">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">Moshe Shop</p>
                    <p class="m-0 font-14">2121</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€8040.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/airline3.png">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">RM Assistenza</p>
                    <p class="m-0 font-14">1987</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€7380.75</p>
              </div>

              <div class="itemBox flex-wrap">
                <div class="airline">
                  <img src="/images/airline3.png">
                  <div>
                    <p class="m-0 font-14 font-weight-bold">RM Assistenza</p>
                    <p class="m-0 font-14">1987</p>
                  </div>
                </div>
                <p class="m-0 font-14 font-weight-bold">€7380.75</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
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
