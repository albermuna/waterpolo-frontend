import React, { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
          
        </div>
      )}
    </div>
  );
};

export default App;
