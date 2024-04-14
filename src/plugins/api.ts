import axios, { type AxiosResponse } from 'axios';
import { type RoomObject, type ReservationObject } from '@/constants';


const baseURL = 'http://192.168.0.104:8000';

export async function fetchRoom(roomID: number): Promise<RoomObject>{
  const response: AxiosResponse<RoomObject> = await axios.get(`${baseURL}/rooms/${roomID}`)
  return response.data
}

export async function fetchRooms(): Promise<RoomObject[]>{
  const response: AxiosResponse<RoomObject[]> = await axios.get(`${baseURL}/rooms`)
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
