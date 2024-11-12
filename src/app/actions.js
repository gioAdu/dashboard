'use server'

import {  revalidateTag } from 'next/cache'

export async function getTime(productId) {
 // revalidateTag('time')

 console.log(productId);
 
  try {
    const jsonData = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await jsonData.json()

    return data
  } catch (error) {}
}
