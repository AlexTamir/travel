export default {
  changeCity (state, city) {
    state.city = city
    try {
      if (localStorage) {
        localStorage.setItem('city', city)
      }
    } catch (e) {}
  }
}
