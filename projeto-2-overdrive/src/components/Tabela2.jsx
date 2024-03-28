import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from '@tanstack/react-table'
  import { useMemo, useState } from 'react'
  import mData from '../db2.json'



const Tabela2 = () => {

const data = useMemo(() => mData, [])
//const [data, setData] = useState(mData)

const columns = [
    {
        accessorKey: 'id',
        header: "ID",
        //cell: (props) => <p>{props.getValue()}</p>
      },
      {
        accessorKey: 'nome',
        header: "Nome",
        //cell: (props) => <p>{props.getValue()}</p>
      },
      {
        accessorKey: 'cpf',
        header: "CPF",
        //cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: 'empresa',
        header: "Empresa",
        //cell: (props) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: 'situacao',
        header: "Situação",
        //cell: (props) => <p>{props.getValue()}</p>
      }
]












const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})

  return (
    <div>
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
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
  )
}

export default Tabela2