import { ref } from 'vue'

export const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Rooms", path: "/rooms", isOpen: false },
  { id: 4, title: "Contact us", path: "/contact", isOpen: false },
])

export const hotelName = "Hotel Lazur"

export const rooms = ref([
  { 
    id: 1, 
    title: "Двойна стая с изглед градина 3 възрастни", 
    description: "Подходяща за настаняване на до 3 възрастни", 
    price: 80
  },
  { 
    id: 2, 
    title: "Двойна стая с изглед градина 2+1", 
    description: "Подходяща за настаняване на 2 възрастни или 2 възрастни с дете", 
    price: 60
  },
  { 
    id: 3, 
    title: "Двойна стая с изглед градина", 
    description: "Подходяща за настаняване на 1 възрастен или 1 възрастен с дете", 
    price: 40
  },
  { 
    id: 4, 
    title: "Двойна стая с изглед басейн 3 възрастни", 
    description: "Подходяща за настаняване на до 3 възрастни", 
    price: 80
  },
  { 
    id: 5, 
    title: "Двойна стая с изглед басейн 2+1", 
    description: "Подходяща за настаняване на 2 възрастни или 2 възрастни с дете", 
    price: 60
  },
  { 
    id: 6, 
    title: "Двойна стая с изглед басейн", 
    description: "Подходяща за настаняване на 1 възрастен с 1 дете", 
    price: 40
  },
  { id: 7, 
    title: "Апартамент", 
    description: "Подходяща за настаняване на 4 възрастни или 2 възрастни с 2 деца", 
    price: 140
  },
  { 
    id: 8, 
    title: "Фамилна стая", 
    description: "Подходяща за настаняване на 2 възрастни с 2 деца", 
    price: 140
  }
])