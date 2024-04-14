import { ref } from 'vue'

export const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Rooms", path: "/rooms", isOpen: false },
  { id: 4, title: "Contact us", path: "/contact", isOpen: false },
])

export const hotelName = 'Hotel Lazur'