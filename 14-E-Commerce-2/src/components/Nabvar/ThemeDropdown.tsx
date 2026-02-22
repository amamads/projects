import { Button } from '../ui/button'
import { MonitorCog, Moon, Sun } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useTheme } from '../theme-provider'

export default function ThemeDropdown() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <Moon className='hidden dark:inline' />
                    <Sun className='dark:hidden' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => setTheme('light')}
                >
                    <Sun />
                    <span>light</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={() => setTheme('dark')}
                >
                    <Moon />
                    <span>dark</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onClick={() => setTheme('system')}
                >
                    <MonitorCog />
                    <span>system</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
