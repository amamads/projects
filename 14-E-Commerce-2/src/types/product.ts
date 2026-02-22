export default interface Product {
    id: number,
    name: string,
    title: string,
    description: string,
    price: number,
    discount: number,
    finalPrice: number,
    rate: number,
    rateCount: number,
    brand: string,
    status: string,
    options: {
        colors: string[],
        storage: string[]
    },
    images: string[]
};