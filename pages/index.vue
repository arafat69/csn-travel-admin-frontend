<template>
  <div>
    <!-- <DashBoard /> -->

    <!-- if wholeseler-->
    <!-- <DashBoardWholesaler /> -->
    <!-- end wholeseler -->

    <!-- if admin-->
    <DashBoardAdmin />
    <!-- end admin -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    })
  },
  // mounted() {
  //   if (!this.isLoggedIn) {
  //     this.$router.push('/login')
  //   }
  // },
}
</script>
