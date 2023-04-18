<template>
  <div class="mt-3">
    <h3 class="header_title">Wallet</h3>

    <div class="card card-body py-2  mb-3">
      <div class="wallet_header">
        <nuxt-link to="/wallet">Personal</nuxt-link>
        <nuxt-link to="/wallet/wholesaler" class="active">wholesaler</nuxt-link>
        <span class="borderBetween"></span>
        <nuxt-link to="/wallet/reseller">Reseller</nuxt-link>
      </div>
    </div>

    <div class="card card-body">
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
        </div>

        <div class="table-responsive">
          <table class="table">
            <thead class="thead-bg">
              <tr>
                <th>ID</th>
                <th>Wholesaler Name</th>
                <th>Current Month Sale</th>
                <th>Today’s Sale</th>
                <th>Last Withdrawn</th>
                <th style="min-width: 100px;"></th>
                <th style="width: 50px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>000044</td>
                <td>Arthur Shop</td>
                <td>€4,267.55</td>
                <td>€267.00</td>
                <td>€5,285.5</td>
                <td><nuxt-link to="/wallet/wholesaler/credit/1">Add Credit</nuxt-link></td>
                <td style="width: 50px;">
                  <img src="~/assets/icons/SVG/arrow-right.svg">
                </td>
              </tr>

              <tr>
                <td>000044</td>
                <td>Arthur Shop</td>
                <td>€4,267.55</td>
                <td>€267.00</td>
                <td>€5,285.5</td>
                <td><nuxt-link to="/wallet/wholesaler/credit/2">Add Credit</nuxt-link></td>
                <td style="width: 50px;">
                  <img src="~/assets/icons/SVG/arrow-right.svg">
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    redirectShopRoute(id) {
      this.$router.push('/wallet/shop/' + id)
    }
  },
}
</script>

<style lang="scss" scoped></style>
