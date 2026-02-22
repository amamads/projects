import React from 'react'
import { DropdownMenu } from './atoms/dropdown-menu'
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from './atoms/button'

export default function ThemeDropdown() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button></Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
