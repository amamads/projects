import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { ROUTES } from '@/router'
import { selectUser, useUserStore } from '@/stores/user-store';
import type User from '@/types/user';
import { useLocation, useNavigate } from 'react-router'

export default function SelectBox() {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const user: User = useUserStore(selectUser)


    const routesArr = Object.entries(ROUTES)
        .map(section => {
            const routes = Object
                .entries(section[1])
                .map(route => ({ text: route[0].toUpperCase(), href: route[1] }))
            return { title: section[0], routes }
        })

    let hiddens = ['PDP', 'TOPDP', 'DASHBOARD'];
    if (user && user.role === 'admin') hiddens = hiddens.filter(str => str !== 'DASHBOARD')
        
    return (
        <Select
            onValueChange={e => navigate(e)}
            value={pathname}
        >
            <SelectTrigger>
                <SelectValue placeholder="Pages" />
            </SelectTrigger>
            <SelectContent>
                {routesArr.map(({ routes, title }, i) => (
                    <SelectGroup key={i}>
                        <SelectLabel>{title}</SelectLabel>
                        {routes.map(({ text, href }, i) => {
                            // console.log(text);
                            if (hiddens.some(it => it === text)) return
                            return (
                                <SelectItem key={i} value={href as string}>{text}</SelectItem>
                            )
                        })}
                    </SelectGroup>
                ))}
            </SelectContent>
        </Select>
    )
}
