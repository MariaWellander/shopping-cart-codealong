import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'Socks', price: 100, emoji: 'x' },
    { id: 2, title: 'T-shirt', price: 200, emoji: 'Y' },
    { id: 3, title: 'Pants', price: 350, emoji: 'Z' },
    { id: 4, title: 'Dress', price: 500, emoji: 'W' }
]

export const products = createSlice({
    name: 'products',
    initialstate: productData
})