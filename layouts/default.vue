<template>
  <section>
    <div class="container-fluid">
      <SideBar />
      <main class="main-content">

        <!--************** Start Header Section ************-->
        <Header />
        <!--************** End Header Section ************-->

        <div class="row">
          <div class="col-lg-2 pr-0"></div>
          <div class="col-lg-10 content body-color p-0 pb-2">
            <div class="container-fluid px-lg-4">
              <!--*********** Start Layout Section *************-->

              <Nuxt />

              <!--******* End Layout Section ******-->
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
