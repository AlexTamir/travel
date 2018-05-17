let city = '广州'
try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (e) {}

export default {
  city: city
}
