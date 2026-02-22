import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { selectLogout, useUserStore } from '@/stores/user-store'

export default function LogoutComponent({ title }: { title: string }) {
    const logout = useUserStore(selectLogout)
    return (
        <Card className='text-center space-y-10'>
            <CardTitle className="text-center text-4xl uppercase">{title}</CardTitle>
            <CardTitle className='text-primary font-bold text-3xl uppercase'>You are logged in</CardTitle>
            <Button
                className='w-40 text-2xl h-15 mx-auto'
                onClick={logout}
            // onClick={() => logout()}
            >
                Logout
            </Button>
        </Card>
    )
}
