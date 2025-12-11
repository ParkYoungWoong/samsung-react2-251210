// http://localhost:3000/api/todos
// HTTP 메소드: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD...
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: process.env.TODO_APIKEY,
    username: process.env.TODO_USERNAME
  }
})

export async function GET() {}

export async function POST() {}
