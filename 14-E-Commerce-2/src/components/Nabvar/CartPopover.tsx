import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { selectCleareCart, selectItems, useCartStore, type CartStoreItem } from '@/stores/cart-store'
import useGetProducts from '@/features/product/pages/hooks/use-get-products'
import CartPopoverItem from './CartPopoverItem'
import { Badge } from '../ui/badge'
import { Link } from 'react-router'
import { ROUTES } from '@/router'


export default function CartPopover() {
    const [open, setOpen] = useState(false)

    const cartItem = useCartStore(selectItems) as CartStoreItem[]
    const clreateCartFn = useCartStore(selectCleareCart);


    const cartItemIds = cartItem.map(item => item.id);
    const { data: productsDB, isLoading, isError, error } = useGetProducts();

    const products = productsDB?.filter(
        product => cartItemIds.some(id => product.id === id)
    )

    function LoadingProducts() {
        if (isLoading) return <h1 className='text-center text-2xl font-bold'>Loading...</h1>
        if (isError) return <h1 className='text-center text-2xl font-bold'>{error.message}</h1>
        return (
            <>
                {products?.map((product) => (
                    <CartPopoverItem key={product.id} product={product} />
                ))}
            </>
        )
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button className='relative'>
                    <ShoppingCart />
                    <Badge
                        className='absolute -bottom-2.5 -left-2.5 h-5 min-w-5 px-1 tabular-nums brightness-130'
                    >{products?.length}</Badge>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-90 grid justify-items-center gap-3'>
                <Link to={ROUTES.main.cart}>
                    <Button
                        className='w-50 text-xl'
                        onClick={() => setOpen(false)}
                    >
                        Go To Basket
                    </Button>
                </Link>
                <Button
                    variant='destructive'
                    className='w-50 text-xl'
                    onClick={() => {
                        clreateCartFn()
                        setOpen(false)
                    }}
                    disabled={products?.length === 0}
                >
                    Cleare Basket
                </Button>
                <LoadingProducts />
            </PopoverContent>
        </Popover>
    )
}
