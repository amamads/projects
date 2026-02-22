import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type User from '@/types/user'
import type { Table as TableType } from '@tanstack/react-table'

export default function SearchInput({ table }: { table: TableType<User> }) {
  return (
    <div className='space-y-2'>
      <Label
        className='text-muted-foreground'
        htmlFor='search-input'
      >Search by username</Label>

      <Input
        id='search-input'
        type='text'
        placeholder='Filter by username...'
        onChange={e => table?.getColumn('username')?.setFilterValue(e.target.value)}
      />
    </div>
  )
}
