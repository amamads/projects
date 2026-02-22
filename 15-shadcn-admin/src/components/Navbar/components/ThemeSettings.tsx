import { Button } from '@/components/atoms/button'
import { Sheet, SheetTrigger } from '@/components/atoms/sheet'
import { Settings } from 'lucide-react'

export default function ThemeSettinga() {
  return (
   <Sheet>
    <SheetTrigger asChild>
        <Button variant='ghost' className='rounded-full'>
            <Settings/>
        </Button>
    </SheetTrigger>
   </Sheet>
  )
}
