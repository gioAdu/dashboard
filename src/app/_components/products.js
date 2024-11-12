'use client'

import {  useState } from 'react'
import { getTime } from '../actions'

export default function Products({initialData}) {
  const [count, setCount] = useState(initialData.id || 1)
  const [products, setProducts] = useState(initialData || null)

  async function test() {
    const myData = await getTime(count + 1)

    setCount(count + 1)
    setProducts(myData)
  }

  return (
    <div>
      <h1>productId {count}</h1>
      <button onClick={test}>increase</button>

      {products && (
        <div>
          <div>{products.brand}</div>
          <div>{products.category}</div>
          <div>{products.id}</div>
          <div>{products.price}</div>
          <div>{products.returnPolicy}</div>
        </div>
      )}
    </div>
  )
}
