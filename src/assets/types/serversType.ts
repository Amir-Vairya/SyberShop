

export interface productsTypes {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: productsRating
}

export interface  productsRating {
  rate: number
  count: number
}
