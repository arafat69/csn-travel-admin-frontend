export default {
  register(context, data) {
    return this.$axios.$post('/register', data)
  },
  login(context, data) {
    return this.$axios.$post('/login', data)
  },
  logout(context, payload) {
    return this.$axios.$post(`/logout`, payload, {
      headers: {
        Authorization: context.rootState.auth.token,
      },
    })
  },
  verifyOtp(context, payload) {
    return this.$axios.$post('/contact/verify', payload, {
      headers: {
        Authorization: context.rootState.auth.token,
      },
    })
  },
  profileUpdate(context, payload) {
    return this.$axios.$post('/users/update', payload, {
      headers: {
        Authorization: context.rootState.auth.token,
      },
    })
  },
  profilePhotoUpdate(context, payload) {
    return this.$axios.$post('/users/profile-photo/update', payload, {
      headers: {
        Authorization: context.rootState.auth.token,
      },
    })
  },
  recoveryPassword(context, payload) {
    return this.$axios.$post('/forgot-password', payload)
  },
  forgotPasswordOTPVerify(context, payload) {
    return this.$axios.$post('/forgot-password/otp/verify', payload)
  },
  resetPassword(context, payload) {
    return this.$axios.$post('/reset-password', payload)
  },
  reSendOtp(context, contact) {
    return this.$axios.$post('/resend/otp', `contact=${contact}`)
  },
}
