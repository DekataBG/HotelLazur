import { ref } from 'vue'
import { fetchRooms } from './plugins/api'

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

export const links = ref([
  { id: 1, title: "Начало", path: "/" },
  { id: 2, title: "За нас", path: "/about" },
  { id: 3, title: "Стаи", path: "/rooms" },
  { id: 4, title: "Контакти", path: "/contact" },
])

export const hotelName = "Хотел Лазур"

export const imagePath = "/rooms/"

export const rooms = ref(await fetchRooms())