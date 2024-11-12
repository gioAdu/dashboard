import Products from "@/app/_components/products"

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id

  return {
    title: `blog ${id}`,
 
  }
}
 

export default async function Page({ params }) {
  const someData = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tbilisi',{
		next:{
			revalidate:1,
			tags:['time']
		}
	})
	const data = await someData.json()
	
	const response = await fetch(`https://dummyjson.com/products/${params.id}`)
	const initialProductsData = await response.json()
	
  return (
    <>
		<div>{data.datetime}</div>
		<Products initialData={initialProductsData}/>
    </>
  )
}
