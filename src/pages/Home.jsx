
import { useState, useEffect } from 'react'
import { Card, LayoutPages } from '../components'
export const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, [])

  return (
    <LayoutPages >
      <div
        className='grid gap-6 grid-cols-4 w-full max-w-screen-xl'>{
          items?.map((item) => (
            <Card
              key={item.id} data={item} />
          ))
        }</div>
    </LayoutPages>
  )
}