<template>
  <div class="page-content">

    <div class="card rounded-8 border-0">
      <div class="card-body position-relative">
        <div class="admin">Admin</div>
        <div class="card_details_profile">
          <div class="profile">
            <img src="/images/Shop logo.svg" alt="photo">
            <button class="profile_photo_change_icon">
              <img src="~/assets/icons/SVG/camera.svg">
            </button>
          </div>
          <div class="profiile_details w-100">
            <div class="name_edit_box"><span class="name">Admin</span></div>
            <div class="email text-gray"> admin@example.com</div>
          </div>
        </div>
        <div class="change-password">
          <nuxt-link to="/change-password">Change Password</nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.change-password {
  padding: 12px 16px;
  border-top: 1px solid #E5E7EB;
  text-align: center;
  margin-top: 24px;
}
.change-password a{
  color: #0E7490;
  text-decoration: underline !important;
}

.admin {
  position: absolute;
  right: 16px;
  top: 16px;
  background: rgba(14, 116, 144, 0.15);
  border-radius: 4px;
  padding: 2px 6px;
  color: #0E7490;
  font-size: 12px;
}

.page-content {
  height: 93vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 400px;
}

.card_details_profile {
  flex-direction: column;
  gap: 12px;
}

.profiile_details {
  text-align: center;
  gap: 0;
}

@media(max-width: 540px) {
  .card {
    width: 95%;
  }
}</style>
