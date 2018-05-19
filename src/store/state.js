let city = '广州'
try {
  if (localStorage) {
    city = localStorage.getItem('city') || '广州'
  }
} catch (e) {}

export default {
  city: city
}
