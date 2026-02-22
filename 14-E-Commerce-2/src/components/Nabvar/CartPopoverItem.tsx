import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type Product from '@/types/product'
import { Space, Star, StarHalf } from 'lucide-react'
import type { ReactNode } from 'react';
import ItemBtns from '@/components/ItemBtns';

export default function CartPopoverItem({ product: {
    id,
    name,
    title,
    description,
    price,
    discount,
    finalPrice,
    rate,
    rateCount,
    brand,
    status,
    options,
    images
} }: { product: Product }) {

    // console.log(
    //     options
    // );
    return (
        <Card>
            <div className='grid grid-cols-3 px-4 gap-y-7'>
                <div className='text-left col-span-2 space-y-4 '>
                    {discount === 0
                        ? (
                            <>
                                <h1>{title}</h1>
                                <p>Price: {price} $</p>
                            </>
                        ) : (
                            <>
                                <h1 className='space-x-1'>
                                    <Badge variant='destructive'>{discount}%</Badge>
                                    <span className='text-destructive underline'>{title}</span>
                                </h1>

                                <div className='space-x-1.5'>
                                    <span>Price:</span>
                                    <span className='text-destructive line-through'>{price} $</span>
                                    <span>{finalPrice} $</span>
                                </div>
                            </>
                        )
                    }
                    <ItemBtns id={id} />
                </div>
                <div>
                    <img src={images[0]} alt={brand} className='rounded-lg h-30' />
                </div>
            </div>
        </Card>
    )
}
