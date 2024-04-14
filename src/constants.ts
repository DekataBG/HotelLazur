import { ref } from 'vue'
import { fetchRooms } from './plugins/api'

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

export const imagePath = "./src/assets/img/rooms/"

export const rooms = ref( await fetchRooms())

export const room = ref({ 
  id: 1, 
  title: "Двойна стая с изглед градина 3 възрастни", 
  description: "Подходяща за настаняване на до 3 възрастни",
  features: "Стаята разполага с гледка към градината, две единични легла, разтегателен диван, сейф, телевизор, телефон, баня, аксесоари за баня, балкон. Стаята разполага с малък хладилник, тип минибар.",
  price: 80,
  image: imagePath + "3beds.jpg"
})
