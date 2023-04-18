<template>
  <div class="mt-3">
    <client-only placeholder="Loading...">
      <!-- <ResellerBooking/> -->
      <WholesellerBooking />
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  // mounted() {
  //   if (!this.isLoggedIn) {
  //     this.$router.push('/login')
  //   }
  // },
}
</script>

<style lang="scss" scoped></style>
