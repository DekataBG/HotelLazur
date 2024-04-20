import axios, { type AxiosResponse, type AxiosRequestConfig, type RawAxiosRequestHeaders } from 'axios';
import { type RoomObject, type ReservationObject, type Message, type RoomTypeObject, type ReservationGeneralInfo } from '@/constants';


const baseURL = 'http://127.0.0.1:8000'; 
// const baseURL = 'http://www.googhigg.com:9000';


// ===========================
//         PUBLIC-API
// ===========================
 
export async function fetchRoomType(roomTypeID: number): Promise<RoomTypeObject>{
  const response: AxiosResponse<RoomTypeObject> = await axios.get(`${baseURL}/room_types/${roomTypeID}`)
  return response.data
}

export async function fetchRoomTypes(): Promise<RoomTypeObject[]>{
  const response: AxiosResponse<RoomTypeObject[]> = await axios.get(`${baseURL}/room_types`)
  return response.data
}

export async function fetchRoom(roomID: number): Promise<RoomObject>{
  const response: AxiosResponse<RoomObject> = await axios.get(`${baseURL}/rooms/${roomID}`)
  return response.data
}

export async function fetchRoomsFromType(roomTypeID: number): Promise<RoomObject[]>{
  const response: AxiosResponse<RoomObject[]> = await axios.get(`${baseURL}/room_types/${roomTypeID}/rooms`)

  return response.data
}

export async function fetchReservationsForType(roomTypeID: number): Promise<ReservationGeneralInfo[]>{
  const response: AxiosResponse<ReservationGeneralInfo[]> = await axios.get(`${baseURL}/room_types/${roomTypeID}/reservations`)
  return response.data
}

export async function fetchReservationsForRoom(roomID: number): Promise<ReservationObject[]>{
  const response: AxiosResponse<ReservationObject[]> = await axios.get(`${baseURL}/rooms/${roomID}/reservations`)
  return response.data
}

// ===========================
//        PRIVATE-API
// ===========================

// TODO: enable when constructing the admin panel

// //post rooms
// export async function addRoom(room: RoomObject): Promise<RoomObject[]>{
//   room.takenDates = null
//   room.id = null
//   const response: AxiosResponse<RoomObject[]> = await axios.post(`${baseURL}/rooms`, room)
//   return response.data
// }

// //delete rooms
// export async function deleteRoom(roomID: number): Promise<RoomObject[]>{
//   const response: AxiosResponse<RoomObject[]> = await axios.delete(`${baseURL}/rooms/${roomID}`)
//   return response.data
// }

//post reservations
export async function addReservation(room_type_Id: number, startDate: Date, days: number): Promise<ReservationObject>{
  console.log(startDate, days)
  const response: any = await axios.post(
    `${baseURL}/room_types/${room_type_Id}/reservations`,
    {'startDate': startDate, 'days': days, 'roomID': -1}
  ).catch(function (error) {
    return {'data': error}
  })
  return response.data
}

//post message
export async function createMessage(name: string, email: string, message: string) {
  const messageToSend: Message = {
    id: null,
    name: name,
    email: email,
    message: message
  };
  
  await axios.post(`${baseURL}/contact`, messageToSend)
}