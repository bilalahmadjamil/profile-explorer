import React from 'react';
import { TablePagination } from '@mui/material';

interface PaginationProps {
  count: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pagination: React.FC<PaginationProps> = ({ count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => (
  <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={count}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
  />
);

export default Pagination;
