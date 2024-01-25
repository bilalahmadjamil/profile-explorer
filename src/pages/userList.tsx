// UserList.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography,CircularProgress } from '@mui/material';
import ProfileModal from '../components/userListConmponents/ProfileModal';
import TextFieldFilter from '../components/userListConmponents/TextFieldFilter';
import UserTable from '../components/userListConmponents/UserTable';
import Pagination from '../components/userListConmponents/Pagination';
import useStyles from './styles/userListStyles';
import { fetchUsers } from '../api/api';

interface UserListProps { }


interface UserData {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  dob: {
    age: number;
  };
  gender: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  nat: string;
  phone: string;
}

const UserList: React.FC<UserListProps> = () => {
  const classes = useStyles();
  const [data, setData] = useState<{ results: UserData[] } | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [genderFilter, setGenderFilter] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchUsers();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenProfileModal = (user: UserData) => {
    setSelectedUser(user);
  };

  const handleCloseProfileModal = () => {
    setSelectedUser(null);
  };

  const handleGenderFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGenderFilter(event.target.value as string);
  };

  const filteredData = data && data.results
    ? data.results.filter((user) => {
      if (genderFilter && user.gender !== genderFilter) {
        return false;
      }
      return true;
    })
    : [];

    if (isLoading) {
      return (
        <Container className={classes.loadingContainer}>
          <CircularProgress size={60} />
        </Container>
      );
    }  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>

      {/* Filter Controls */}
      <TextFieldFilter
        value={genderFilter}
        onChange={handleGenderFilterChange}
        classes={{
          textFieldRoot: classes.textFieldRoot,
          textFieldInput: classes.textFieldInput,
          textFieldLabel: classes.textFieldLabel,
          textFieldLabelFocused: classes.textFieldLabelFocused,
        }}
      />

      {/* User Table */}
      <UserTable
        filteredData={filteredData}
        page={page}
        rowsPerPage={rowsPerPage}
        handleOpenProfileModal={handleOpenProfileModal}
      />

      {/* Pagination */}
      <Pagination
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />

      {/* Profile Modal */}
      <ProfileModal
        open={Boolean(selectedUser)}
        onClose={handleCloseProfileModal}
        selectedUser={selectedUser}
      />
    </Container>
  );
};

export default UserList;
