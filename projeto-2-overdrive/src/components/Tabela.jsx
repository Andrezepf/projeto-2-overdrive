import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'


const Tabela = ({data, columns}) => {

  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering
    },
    onGlobalFilterChange: setFiltering
  })

  return (
    <div className='divTabela'>
      <input
        className="input-search "
        placeholder='Pesquisar...'
        type='text'
        value={filtering}
        onChange={e => setFiltering(e.target.value)}
      />
      <div className="tabela table-responsive-xxl">
        <table className='table table-hover table-bordered'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>)}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className="w-auto h-auto p-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div className='paginacao'>
        <button className='pagin btn btn-sm btncor' disabled={!table.getCanPreviousPage()} onClick={() => table.setPageIndex(0)}> {`<<`} </button>
        <button
          className='pagin btn btn-sm btncor'
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {`<`}
        </button>
        <button
          className='pagin btn btn-sm btncor'
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {`>`}
        </button>
        <button className='pagin btn btn-sm btncor' disabled={!table.getCanNextPage()} onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          {`>>`}
        </button>
      </div>
    </div>
  )
}

export default Tabela