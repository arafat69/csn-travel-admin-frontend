<template>
  <div class="sticky-top w-100 top_navbar">
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-10 bg-white py-2 text-right">
        <button id="toggle-btn" onclick="toggleSidebar()" class="btn toggle-sidebar">
          <i class="fas fa-bars"></i>
        </button>

        <div class="multilanguage-section">
          <a href="#" class="language active">EN</a>
          <a href="#" class="language">IT</a>
        </div>

        <div class="left-header">
          <client-only placeholder="loading...">
            <div class="dropdown m-0">
              <button id="dropdownMenuButton" class="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                <!-- <span v-if="user"><img class="avater" :src="user.profile_photo_path" alt="profile" /></span> -->
                <span><img class="avater" src="/images/dummy-user.png" alt="profile" /></span>
              </button>
              <div class="dropdown-menu header-dropdown-menu card-shadow" aria-labelledby="dropdownMenuButton">
                <nuxt-link class="dropdown-item" to="/change-password">
                  <img src="~/assets/icons/SVG/key.svg" />Change Password
                </nuxt-link>
                <button class="dropdown-item" @click="logout()">
                  <img src="~/assets/icons/SVG/logout.svg" />Log out
                </button>
              </div>
            </div>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HeaderPage',
  computed: mapGetters({
    user: 'auth/getLoggedInUser',
  }),
  methods: {
    logout() {
      this.$router.push('/login')
      this.$toast.success('Logout Successfully')
      // this.$store.dispatch('auth/logout').then(res => {
      //   this.$toast.success(res.message)
      //   this.$store.commit('auth/SET_USER', null)
      //   this.$store.commit('auth/SET_ACCESS_TOKEN', null)
      //   this.$store.commit('auth/SET_ROLE', null)
      //   this.$router.push('/login')
      // }).catch(err => {
      //   this.$store.commit('auth/SET_USER', null)
      //   this.$store.commit('auth/SET_ACCESS_TOKEN', null)
      //   this.$store.commit('auth/SET_ROLE', null)
      //   this.$toast.error(err.response.data.message)
      //   this.$router.push('/login')
      // })
    }
  },
}
</script>

<style scoped></style>

