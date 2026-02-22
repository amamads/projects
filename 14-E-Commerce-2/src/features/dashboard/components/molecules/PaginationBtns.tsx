import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type { Table as TableType } from '@tanstack/react-table'
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type User from '@/types/user'
import { Button } from '@/components/ui/button'

const PaginationBtns = ({ table }: { table: TableType<User> }) => {
  return (
    <Pagination>
      <PaginationContent>

        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'
            onClick={() => table?.firstPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            <ChevronFirstIcon className='size-4' />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'
            onClick={() => table?.previousPage()}
            disabled={!table?.getCanPreviousPage()}
          >
            <ChevronLeftIcon className='size-4' />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Select
            value={String(table.getState().pagination.pageIndex + 1)}
            onValueChange={e => table.setPageIndex(Number(e) - 1)}
          >
            <SelectTrigger id='select-page' className='w-fit whitespace-nowrap' aria-label='Select page'>
              <SelectValue placeholder='Select page' />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(page => (
                <SelectItem key={page} value={String(page)}>
                  Page {page}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PaginationItem>

        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full'
            onClick={() => table?.nextPage()}
            disabled={!table?.getCanNextPage()}
          >
            <ChevronRightIcon className='size-4' />
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button
            variant='ghost'
            size='icon'
            className='rounded-full cursor-pointer'
            onClick={() => table?.lastPage()}
            disabled={!table?.getCanNextPage()}
          >
            <ChevronLastIcon className='size-4' />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationBtns
