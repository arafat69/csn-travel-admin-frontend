<template>
  <!-- <client-only placeholder="Loading..."> -->
    <aside id="sidebar" class="sidebar-wrap hide">
      <ul>
        <nuxt-link to="/" class="py-3 logo position-relative d-block mb-4">
          <img class="main-logo" src="/images/logo.svg" alt="" />
        </nuxt-link>

        <!-- <nuxt-link v-show="role === 'reseller'" to="/" class="side-menu" exact>
        <img width="20" src="~/assets/icons/SVG/flight.svg" alt="" />Flight
        </nuxt-link> -->

        <nuxt-link  to="/" class="side-menu" exact>
          <img width="20" src="~/assets/icons/SVG/dashboard.svg" alt="icon" />Dashboard
        </nuxt-link>

        <nuxt-link to="/booking" class="side-menu">
          <img width="20" src="~/assets/icons/SVG/booking.svg" alt="" />
          Booking
        </nuxt-link>

        <!-- <nuxt-link v-show="role === 'wholesaler'" to="/reseller" class="side-menu">
          <img width="20" src="~/assets/icons/SVG/reseller.svg" alt="" />
          Reseller
        </nuxt-link> -->

        <!-- v-show="role === 'admin'" -->
        <nuxt-link  to="/wholesaler" class="side-menu">
          <img width="20" src="~/assets/icons/SVG/reseller.svg" alt="" />
          Wholesalers
        </nuxt-link>

        <nuxt-link to="/wallet" class="side-menu">
          <img width="20" src="~/assets/icons/SVG/Wallet.svg" alt="" />
          Wallet
        </nuxt-link>

        <a href="#reports" :class="mainMenuActive" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="reports">
          <img width="20" src="~/assets/icons/SVG/report.svg" alt="" />
          <span class="d-flex justify-content-between align-items-center w-100">
            Reports <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <div class="reportMenu">
          <div id="reports" :class="collapseActive">
            <!-- <nuxt-link to="/reports/last-sale" class="sub-menu">Last Sale</nuxt-link>
            <nuxt-link to="/reports/airline-wise" class="sub-menu">Airline Wise</nuxt-link> -->

            <nuxt-link to="/reports/wholesaler-last-sale" class="sub-menu">Wholesaler Last Sale</nuxt-link>
            <nuxt-link to="/reports/reseller-last-sale" class="sub-menu">Reseller Last Sale</nuxt-link>
            <nuxt-link to="/reports/airline-wise" class="sub-menu">Airline Wise</nuxt-link>

            <nuxt-link to="/reports/wholesaler-wise" class="sub-menu">Wholesaler Wise</nuxt-link>

            <!-- wholeseller sub-menu -->
            <nuxt-link to="/reports/reseller-wise" class="sub-menu">Reseller Wise</nuxt-link>
            <!-- end wholeseller sub-menu -->

            <!-- <nuxt-link to="/reports/destination-wise" class="sub-menu">Destination Wise</nuxt-link> -->
          </div>
        </div>

        <nuxt-link to="/profile" class="side-menu">
          <img width="20" src="~/assets/icons/SVG/profile.svg" alt="" />
          Profile
        </nuxt-link>

        <!-- wholeseller Admin -->
        <div v-show="role === 'wholesaler'">
          <div class="border-top mb-2"></div>
          <nuxt-link to="/configuration" class="side-menu">
            <img width="20" src="~/assets/icons/SVG/configuration.svg" alt="" />
            Configuration
          </nuxt-link>
        </div>

      </ul>


      <div class="bottom_user d-none d-md-block">
        <div class="d-flex justify-content-between">
          <img class="avater" src="/images/Shop logo.svg" />
          <div>
            <nuxt-link to="/" class="auth">Admin</nuxt-link>
          </div>
        </div>
        <div class="mt-2">
          <span class="name">Moshe Shop</span>
          <span class="email">shop_00@example.com</span>
        </div>
      </div>
    </aside>
  <!-- </client-only> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      mainMenuActive: 'side-menu',
      collapseActive: 'collapse'
    }
  },
  computed: {
    ...mapGetters({
      role: 'auth/getRole'
    })
  },
  watch: {
    '$route'() {
      this.menuActiveOrInactive()
    }
  },
  mounted() {
    this.menuActiveOrInactive()
  },
  methods: {
    menuActiveOrInactive() {
      if (this.$route.fullPath === '/reports/last-sale' || this.$route.fullPath === '/reports/airline-wise' || this.$route.fullPath === '/reports/destination-wise' || this.$route.fullPath === '/reports/reseller-wise' || this.$route.fullPath === '/reports/wholesaler-wise' || this.$route.fullPath === '/reports/wholesaler-last-sale' || this.$route.fullPath === '/reports/reseller-last-sale') {
        this.mainMenuActive = 'side-menu nuxt-link-active';
        this.collapseActive = 'collapse show'
        return true;
      }
      this.mainMenuActive = 'side-menu';
      this.collapseActive = 'collapse'
    }
  },
}
</script>

<style lang="scss" scoped></style>
