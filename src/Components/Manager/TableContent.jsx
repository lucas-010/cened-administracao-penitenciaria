import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';

const columns = [
    {
      id: 'datam',
      label: 'Data Matrícula',
      minWidth: 100
    },
    { 
      id: 'student', 
      label: 'Estudante', 
      minWidth: 170 
    },
  
    { 
      id: 'course', 
      label: 'Curso', 
      minWidth: 170 
    },
  
    {
      id: 'init',
      label: 'Início',
      minWidth: 100
    },
  
    {
      id: 'end',
      label: 'Término',
      minWidth: 100,
    },
  
  
    {
      id: 'situation',
      label: 'Situação',
      minWidth: 170,
    },
  ];

export default function TableContent() {
    const [rows, setRows] = useState([
        {
            datam: '12/12/2012',
            student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220	',
            course: 'Inglês Anvaçado',
            init: '12/12/2012',
            end: '22/22/2022',
            situation: 'APROVADO'
        }
    ])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [students, setStudents] = useState([])
    const [searchValue, setSearchValue] = useState('')
  return (
    <Grid>
    <Paper className='mt-5' sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                Data Matrícula
              </TableCell>

              <TableCell>
                Estudante
              </TableCell>

              <TableCell>
                Curso
              </TableCell>

              <TableCell>
                Início
              </TableCell>

              <TableCell>
                Término
              </TableCell>

              <TableCell>
                Situação
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
      />
    </Paper>
  </Grid>
  )
}
