import ThemeDropdown from './ThemeDropdown'
import SelectBox from './SelectBox'
import { Button } from '../ui/button'
import { selectIsLogged, selectUser, useUserStore } from '@/stores/user-store'
import { Link, useNavigate } from 'react-router'
import { ROUTES } from '@/router'
import { motion } from 'motion/react'
import CartPopover from './CartPopover'
import NavTabs from './NavTabs'

const LinkMotion = motion(Link);

export function Navbar() {
    const navigate = useNavigate();

    const userIsLogged = useUserStore(selectIsLogged)
    const user = useUserStore(selectUser)

    return (
        <div className='flex justify-between py-5'>
            <div className='flex gap-2'>
                <LinkMotion
                    to={ROUTES.default.home}
                    whileHover={{ scale: 1.2 }}
                    className='inline-block text-2xl font-bold bg-linear-to-r from-[#2AFADF] to-[#4C83FF] to-70% bg-clip-text text-transparent'
                >
                    AMS
                </LinkMotion>
                <div className='md:hidden'>
                    <SelectBox />
                </div>
                <div className='hidden md:block'>
                    <NavTabs />
                </div>
            </div>



            <div className='flex items-center gap-1'>
                <Button
                    onClick={() => {
                        userIsLogged
                            ? navigate(ROUTES.main.dashboard)
                            : navigate(ROUTES.auth.login)
                    }}
                >
                    {userIsLogged ? user.username : 'login'}
                </Button>
                <CartPopover />

                <ThemeDropdown />

            </div>
        </div >
    )
}
