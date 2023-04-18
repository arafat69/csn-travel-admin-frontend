<template>
  <div class="mt-3">
    <h3 class="header_title">Wallet</h3>

    <div class="card card-body py-2  mb-3">
      <div class="wallet_header">
        <nuxt-link to="/wallet">Personal</nuxt-link>
        <nuxt-link to="/wallet/reseller">Reseller</nuxt-link>
        <button class="active resellerShopBtn">
          <span>Arthur Shop </span>
          <nuxt-link to="/wallet/reseller">
            <i class="fa fa-times"></i>
          </nuxt-link>
        </button>
      </div>
    </div>

    <div class="row flex-column-reverse flex-lg-row">
      <div class="col-lg-8">

        <div class="card card-body">
          <div class="over_view d-flex justify-content-between">
            <span class="font-18">Sale Overview</span>
            <div>
              <span class="font-16 text-gray">Sort By:</span>
              <select name="" id="" class="border">
                <option value="">This Month</option>
              </select>
            </div>
          </div>
          <!-- Line Chart -->
          <client-only placeholder="Loading...">
            <apexChart height="350" :options="options" :series="series"></apexChart>
          </client-only>
        </div>

        <div class="card card-body mt-3">
          <div class="over_view d-flex justify-content-between">
            <span class="font-18">Last Transaction</span>
            <nuxt-link to="/wallet/shop/transction/1" class="default-color">View All</nuxt-link>
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
        </div>

      </div>
      <!-- right side bar -->
      <div class="col-lg-4">
        <div class="visaWalet mt-3 mt-lg-0">
          <span>Available Balance</span>
          <div class="amount">€3,265.75</div>
          <div class="cardNumber">
            <div class="digit">****</div>
            <div class="digit">****</div>
            <div class="digit">****</div>
            <div class="digit">2255</div>
          </div>
          <div class="card_holder">
            <span class="name">MOSHE SHOP</span>
            <div class="expire">4/19</div>
          </div>
        </div>

        <div class="saleBox card card-body mt-3">
          <div class="d-flex justify-content-between">
            <span class="font-18">Today's Sale</span>
            <div class="percent increase">
              +10.25 %
            </div>
          </div>
          <h3>€1,265.75</h3>
        </div>

        <div class="saleBox card card-body mt-3">
          <div class="d-flex justify-content-between">
            <span class="font-18">Last Month Sale</span>
            <div class="percent decrease">
              +2.35 %
            </div>
          </div>
          <h3>€4,267.55</h3>
        </div>

        <div class="saleBox card card-body mt-3">
          <div class="d-flex justify-content-between">
            <span class="font-18">Last Withdrawn</span>
          </div>
          <h3>€2,900.00</h3>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

      // chart js
      options:{
        chart: {
          type: 'area',
          toolbar: {
            show: false
          },
        },
        markers: {
          size: 4
        },
        colors: ['#0E7490'],
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
        }
      },
      series: [ {
        name: 'This Month',
        data: [5, 7, 10, 6, 9, 11, 12, 14, 16, 19, 11, 2, 13, 10, 5, 16, 16, 18]
      }],
    }
  },
}
</script>

<style lang="scss" scoped></style>
