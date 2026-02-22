import { Button } from '@/components/ui/button'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import useDeleteUser from '@/features/product/pages/hooks/use-delete-user'
import { Trash2 } from 'lucide-react'

export default function DeleteUserDialog({ id }: { id: string }) {
    const { mutate: deleteUser } = useDeleteUser();
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant='ghost' className='h-6 w-full flex gap-3'>
                    <Trash2 />
                    <p>delete</p>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt officiis quibusdam facilis ea mollitia consequuntur fugit, dolorum excepturi fugiat, possimus sint magni reprehenderit esse sed beatae quas tenetur laboriosam?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => deleteUser(id)}
                    >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
