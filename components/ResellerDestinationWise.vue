<template>
  <div>
    <h3 class="header_title">Reports <span class="mini-text">/Destination Wise</span></h3>

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
      <div class="col-lg-12">
        <div class="card card-body">

          <div class="searchInputSection justify-content-between destination pb-3">

            <div class="from_to">
              <input class="form-control" type="text" placeholder="From Where?" />
              <input class="form-control" type="text" placeholder="To Where?" />
              <div class="leftRightAngel">
                <img src="~/assets/icons/SVG/leftRight.svg" alt="" />
              </div>
            </div>

            <div class="serarch">
              <div class="select-date item">
                <input id="basic" class="form-control" type="text" />
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

          </div>

          <div class="table-responsive">
            <table class="table">
              <thead class="thead-bg">
                <tr>
                  <th>Date</th>
                  <th>Arilines</th>
                  <!-- if wholeseler -->
                  <th>Sold By</th>
                  <!-- endif -->
                  <th>From</th>
                  <th>To</th>
                  <th>Total Ticket</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30/12/2022</td>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Singapore Airlines</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Turkish Airlines</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Singapore Airlines</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Emirates</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Singapore Airlines</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

                <tr>
                  <td>30/12/2022</td>
                  <td>Turkish Airlines</td>
                  <!-- if wholeseler -->
                  <td>Arthur Shop</td>
                  <!-- endif -->
                  <td>Dhaka, Bangladesh (DAC)</td>
                  <td>Cox’s Bazar (CXB)</td>
                  <td>162</td>
                  <td>€230.00</td>
                </tr>

              </tbody>
            </table>
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

<style lang="scss" scoped></style>
