<template>
  <div class="mt-3">
    <h3 class="header_title"><nuxt-link to="/wallet">Wallet</nuxt-link> <span class="mini-text">/Transactions/Arthur Shop</span></h3>

    <div class="card card-body mt-3">
      <div class="filtaring-section">
        <div class="search-box item">
          <input class="form-control" type="text" placeholder="Search By Id"/>
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
          <input class="form-control" type="text" id="basic" />
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
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
