import axios, { type AxiosResponse, type AxiosRequestConfig, type RawAxiosRequestHeaders } from 'axios';
import { type RoomObject, type ReservationObject, type Message } from '@/constants.ts';


const baseURL = 'http://127.0.0.1:8000'; 
// const baseURL = 'http://www.googhigg.com:9000';

export async function fetchRoom(roomID: number): Promise<RoomObject>{
  const response: AxiosResponse<RoomObject> = await axios.get(`${baseURL}/rooms/${roomID}`)
  return response.data
}

export async function fetchRooms(): Promise<RoomObject[]>{
  const response: AxiosResponse<RoomObject[]> = await axios.get(`${baseURL}/room_types`)
  return response.data
}

//post rooms
export async function addRoom(room: RoomObject): Promise<RoomObject[]>{
  room.takenDates = null
  room.id = null
  const response: AxiosResponse<RoomObject[]> = await axios.post(`${baseURL}/rooms`, room)
  return response.data
}

//delete rooms
export async function deleteRoom(roomID: number): Promise<RoomObject[]>{
  const response: AxiosResponse<RoomObject[]> = await axios.delete(`${baseURL}/rooms/${roomID}`)
  return response.data
}

//post reservations
export async function addReservation(reservation: ReservationObject): Promise<RoomObject[]>{
  reservation.id = null
  const response: AxiosResponse<RoomObject[]> = await axios.post(`${baseURL}/reservations`, reservation)
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