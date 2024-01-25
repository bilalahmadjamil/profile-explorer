import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/userList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        {/* Add a route for the user profile page */}
      </Routes>
    </Router>
  );
};

export default App;