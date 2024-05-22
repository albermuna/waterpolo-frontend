import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}</h1>
        </div>
      ) : (
        <div>
          <Login setUser={setUser} />
          <Register />
        </div>
      )}
    </div>
  );
};

export default App;
