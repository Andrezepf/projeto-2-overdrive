import { useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dataPessoa from "../data";
import './Tabela.css'


const columns = [
  {
    acessorKey: 'id',
    header: "ID",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    acessorKey: 'nome',
    header: "Nome",
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    acessorKey: 'cpf',
    header: "CPF",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    acessorKey: 'empresa',
    header: "Empresa",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    acessorKey: 'situacao',
    header: "Situação",
    cell: (props) => <p>{props.getValue()}</p>
  }
]

const Tabela = () => {
  const [data, setData] = useState(dataPessoa)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })


  console.log(table.getHeaderGroups())
  return (
    <Box>
      <Box className="table" w={table.getTotalSize}>
        {table.getHeaderGroups().map((headerGroup) => (<Box className="tr" key={headerGroup.id}>
          {headerGroup.headers.map(
            (header) => (<Box className="th" key={header.id}>
              {header.column.columnDef.header}
            </Box>
          ))}
        </Box>
        ))}
        {
          table.getRowModel().rows.map((row) => (<Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (<Box className="td" key={cell.id}>
            {
              flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )
            }
            </Box>))}
          </Box>))
        }
      </Box>
    </Box>
  )
}

export default Tabela