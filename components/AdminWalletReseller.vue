<template>
  <div class="mt-3">
    <h3 class="header_title">Wallet</h3>

    <div class="card card-body py-2  mb-3">
      <div class="wallet_header">
        <nuxt-link to="/wallet">Personal</nuxt-link>
        <nuxt-link to="/wallet/wholesaler">wholesaler</nuxt-link>
        <span class="borderBetween"></span>
        <nuxt-link to="/wallet/reseller" class="active">Reseller</nuxt-link>
      </div>
    </div>

    <div class="card card-body">
      <div class="filtaring-section">
        <div class="search-box item" style="max-width: 560px;">
          <input class="form-control " type="text" placeholder="&#xF002; Search" style="font-family:Arial, FontAwesome" />
        </div>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead class="thead-bg">
            <tr>
              <th>ID</th>
              <th>Reseller Name</th>
              <th>Wholesaler</th>
              <th>Current Month Sale</th>
              <th>Today’s Sale</th>
              <th>Last Withdrawn</th>
              <th style="width: 50px;"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="clickable-row" @click="redirectShopRoute(2)">
              <td>000044</td>
              <td>Arthur Shop</td>
              <td>RM Assistenza</td>
              <td>€4,267.55</td>
              <td>€267.00</td>
              <td>€5,285.5</td>
              <td style="width: 50px;">
                <img src="~/assets/icons/SVG/arrow-right.svg">
              </td>
            </tr>

            <tr class="clickable-row" @click="redirectShopRoute(2)">
              <td>000044</td>
              <td>Arthur Shop</td>
              <td>RM Assistenza</td>
              <td>€4,267.55</td>
              <td>€267.00</td>
              <td>€5,285.5</td>
              <td style="width: 50px;">
                <img src="~/assets/icons/SVG/arrow-right.svg">
              </td>
            </tr>

          </tbody>
        </table>
      </div>
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
