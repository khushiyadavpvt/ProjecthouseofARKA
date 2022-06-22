import axios from 'axios';

const base_url = "http://localhost:4000/"

const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzk4ZDcyMmYwNGYzODlkYmJmMTIyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTM1NjM5NSwiZXhwIjoxNjM1NjE1NTk1fQ.oG5Awhml9qANoQDJpTirN5FWBEz3FQyqHPL_hxqV4iQ"



export const publicReq = axios.create({
    baseURL: base_url,
})

export const UserReq = axios.create({
    baseURL: base_url,
    headers: { token : `Bearer ${Token}`}
});