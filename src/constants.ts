import { ref } from 'vue'

// Type declarations

export interface ReservationObject{
  id: number | null,
  startDate: string,
  endDate: string,
  email: string,
  roomID: number
}

export interface RoomObject{
  id: number | null,
  title: string,
  description: string,
  features: string,
  price: number,
  imagePath: string,
  capacity: number,
  takenDates: ReservationObject[] | null
}

// End of type declarations

export const links = ref([
  { id: 1, title: "Home", path: "/", isOpen: true },
  { id: 2, title: "About us", path: "/about", isOpen: false },
  { id: 3, title: "Rooms", path: "/rooms", isOpen: false },
  { id: 4, title: "Contact us", path: "/contact", isOpen: false },
])

export const hotelName = "Hotel Lazur"

const imagePath = "./src/assets/img/rooms/"

export const rooms = ref([
  { 
    id: 1, 
    title: "Двойна стая с изглед градина 3 възрастни", 
    description: "Подходяща за настаняване на до 3 възрастни",
    price: 80,
    image: imagePath + "3beds.jpg"
  },
  { 
    id: 2, 
    title: "Двойна стая с изглед градина 2+1", 
    description: "Подходяща за настаняване на 2 възрастни или 2 възрастни с дете", 
    price: 60,
    image: imagePath + "beds2+1.jpg"
  },
  { 
    id: 3, 
    title: "Двойна стая с изглед градина", 
    description: "Подходяща за настаняване на 1 възрастен или 1 възрастен с дете", 
    price: 40,
    image: imagePath + "beds2.jpg"
  },
  { 
    id: 4, 
    title: "Двойна стая с изглед басейн 3 възрастни", 
    description: "Подходяща за настаняване на до 3 възрастни", 
    price: 80,
    image: imagePath + "3beds.jpg"
  },
  { 
    id: 5, 
    title: "Двойна стая с изглед басейн 2+1", 
    description: "Подходяща за настаняване на 2 възрастни или 2 възрастни с дете", 
    price: 60,
    image: imagePath + "beds2+1.jpg"
  },
  { 
    id: 6, 
    title: "Двойна стая с изглед басейн", 
    description: "Подходяща за настаняване на 1 възрастен с 1 дете", 
    price: 40,
    image: imagePath + "beds2.jpg"
  },
  { id: 7, 
    title: "Апартамент", 
    description: "Подходяща за настаняване на 4 възрастни или 2 възрастни с 2 деца", 
    price: 140,
    image: imagePath + "apartment.jpg"
  },
  { 
    id: 8, 
    title: "Фамилна стая", 
    description: "Подходяща за настаняване на 2 възрастни с 2 деца", 
    price: 140,
    image: imagePath + "family.jpg"
  }
])

export const room = ref({ 
  id: 1, 
  title: "Двойна стая с изглед градина 3 възрастни", 
  description: "Подходяща за настаняване на до 3 възрастни",
  features: "Стаята разполага с гледка към градината, две единични легла, разтегателен диван, сейф, телевизор, телефон, баня, аксесоари за баня, балкон. Стаята разполага с малък хладилник, тип минибар.",
  price: 80,
  image: imagePath + "3beds.jpg"
})
