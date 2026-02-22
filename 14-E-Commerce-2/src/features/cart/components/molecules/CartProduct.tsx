import ItemBtns from '@/components/ItemBtns';
import RateStars from '@/components/RateStars';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ROUTES } from '@/router';
import type Product from '@/types/product';
import { Link } from 'react-router';

export default function CartProduct({ product: {
    id,
    title,
    price,
    discount,
    finalPrice,
    rate,
    rateCount,
    brand,
    options,
    images
} }: { product: Product }) {
    return (
        <Card>
            <div className='grid grid-cols-3 px-4 gap-y-7'>
                <div>
                    <img src={images[0]} alt={brand} className='rounded-lg h-30' />
                </div>
                <div className='text-left col-span-2 space-y-2 '>
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
                    <div className='flex items-center gap-1'>
                        <p>Rate:</p>
                        <RateStars number={rate} />
                        <Badge variant='outline'>{rateCount}</Badge>
                    </div>
                    <div className='space-y-1'>
                        <div className='space-x-1'>
                            <Badge className='text-[10px] '>Color</Badge>
                            {options.colors.map((clr, i) => (
                                <Badge variant='outline' key={i} className='text-[9px]'>{clr}</Badge>
                            ))}
                        </div>
                        <div className='space-x-1'>
                            <Badge className='text-[10px] '>Storage</Badge>
                            {options.storage.map((str, i) => (
                                <Badge variant='outline' className='text-[9px]' key={i}>{str}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-span-3 space-x-2'>
                    <ItemBtns id={id} />
                    <Link to={ROUTES.main.toPDP(id)}>
                        <Button >Details</Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
}
