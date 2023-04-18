<template>
  <div class="mt-3">
    <client-only placeholder="Loading...">
      <h3 class="header_title">Wholesalers</h3>

      <div class="card card-body">
        <div class="d-flex justify-content-between gap-8 flex-wrap align-items-center">
          <div class="bookingSearch">
            <b-input-group>
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input type="search" placeholder="Search..."></b-form-input>
            </b-input-group>
          </div>
          <div>
            <nuxt-link to="/wholesaler/create" class="btn btn-primary createBtn">
              <i class="fa fa-plus icon"></i> New Reseller
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="table-responsive mt-2">
        <table class="table ReselerTable">
          <tbody>
            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/Shop logo.svg">
                <span class="shop_name">Moshe Shop</span>
              </td>
              <td>VAxzaRmYbIPcUY8L
              </td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/Shop logo.svg">
                <span class="shop_name">Moshe Shop</span>
              </td>
              <td>VAxzaRmYbIPcUY8L
              </td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

            <tr>
              <td>000044</td>
              <td class="text-muted">12 Sep, 2022 18:13pm</td>
              <td>
                <img class="shopLogo" src="/images/shopLogo.svg">
                <span class="shop_name">Arthur Shop </span>
              </td>
              <td>rOGtKB4vi2jpaRX1</td>
              <td><a href="">Balance: €60.5</a></td>
              <td style="width: 120px;">
                <nuxt-link to="/wholesaler/profile/1" class="text-dark">View Details</nuxt-link>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    })
  },
}
</script>

<style lang="scss" scoped></style>
