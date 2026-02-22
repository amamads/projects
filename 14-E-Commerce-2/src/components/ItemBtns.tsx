import { selectAddItem, selectDecreaseQty, selectIncreaseQty, selectRemoveItem, useCartStore } from "@/stores/cart-store"
import { MinusIcon, PlusIcon, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { constructNow } from "date-fns"



function ItemBtns({ id }: { id: number }) {
    const addItem = useCartStore(selectAddItem)
    const increaseQty = useCartStore(selectIncreaseQty)
    const decreaseQty = useCartStore(selectDecreaseQty)

    const item = useCartStore(s => s.items.find(item => item.id === id))
    const isItemQtyZero = item?.qty === 1;


    if (!item) return (
        <Button onClick={() => addItem(id)}>
            Add to cart
        </Button>
    )
    return (
        <div className='divide-primary-foreground/30 inline-flex w-fit divide-x rounded-md shadow-xs'>
            <Button
                size='icon'
                className='rounded-none rounded-l-full focus-visible:z-10'
                onClick={() => decreaseQty(id)}
            >
                {isItemQtyZero
                    ? <Trash />
                    : <MinusIcon />
                }
            </Button>
            <span className='bg-primary text-primary-foreground inline-flex items-center px-3 py-2 text-sm font-medium'>
                {item.qty}
            </span>
            <Button
                size='icon'
                className='rounded-none rounded-r-full focus-visible:z-10'
                onClick={() => increaseQty(id)}
            >
                <PlusIcon />
            </Button>
        </div>
    )
}

export default ItemBtns