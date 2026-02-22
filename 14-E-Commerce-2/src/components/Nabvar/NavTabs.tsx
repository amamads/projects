import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ROUTES } from '@/router'
import { useUserStore, selectUser } from '@/stores/user-store'
import type User from '@/types/user'
import { useLocation, useNavigate } from 'react-router'
const NavTabs = () => {
    const user: User = useUserStore(selectUser)
    const { pathname } = useLocation()
    const navigate = useNavigate();

    const tabs = Object.entries(ROUTES)
        .map(section => {
            const routes = Object
                .entries(section[1])
                .map(route => ({ name: route[0].toUpperCase(), value: String(route[1]) }))
            return routes
        })
        .flat()

    let hiddens = ['PDP', 'TOPDP', 'DASHBOARD'];
    if (user && user.role === 'admin') hiddens = hiddens.filter(str => str !== 'DASHBOARD')

    return (
        <div className='w-full max-w-md'>
            <Tabs defaultValue={pathname}>
                <TabsList className='bg-background gap-1 border p-1'>
                    {tabs.map(tab => {
                        if (hiddens.some(it => it === tab.name)) return
                        return (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                onClick={() => navigate(tab.value)}
                                className='data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-transparent'
                            >
                                {tab.name}
                            </TabsTrigger>
                        )
                    })}
                </TabsList>
            </Tabs>
        </div>
    )
}

export default NavTabs
