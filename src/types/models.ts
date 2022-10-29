export interface IProductBase {
    title: string
    price: number
    description: string
    category: string
    image: string
}

export interface IProduct extends IProductBase{
    id: number
    rating: {
        rate: number
        count: number
    }
}