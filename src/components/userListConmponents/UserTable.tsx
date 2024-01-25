// src/components/UserTable.js
import React from 'react';
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton } from '@mui/material';
import { Person } from '@mui/icons-material';

interface UserTableProps {
  filteredData: Array<{ login: { uuid: string }; name: { first: string; last: string }; email: string; phone: string; gender: string }>;
  page: number;
  rowsPerPage: number;
  handleOpenProfileModal: (user: any) => void;
}

const UserTable: React.FC<UserTableProps> = ({ filteredData, page, rowsPerPage, handleOpenProfileModal }) => (
  <Grid container justifyContent="center">
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow key={user.login.uuid}>
                <TableCell>{user.name.first}</TableCell>
                <TableCell>{user.name.last}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenProfileModal(user)}>
                    <Person />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  </Grid>
);

export default UserTable;
