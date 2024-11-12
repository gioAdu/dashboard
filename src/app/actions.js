'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function getTime(productId) {
  //revalidatePath('/')
  revalidateTag('time')

  try {
    const jsonData = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await jsonData.json()

    return data
  } catch (error) {}
}
