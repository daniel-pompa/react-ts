import { useState } from 'react';
import IUser from '../interfaces/IUser';

const User = () => {
  const [user, setUser] = useState<IUser>();

  const login = () => {
    setUser({
      uid: 'b11e68db-8bce-302bbb879db4',
      name: 'Daniel',
      surnames: 'Pompa Pareja',
    });
  };

  return (
    <div className='my-5'>
      <h2>Usuario - useState</h2>

      <button onClick={login} className='btn btn-outline-primary mt-4'>
        Login
      </button>

      {!user ? (
        <p className='mt-4'>No hay usuario</p>
      ) : (
        <pre className='mt-4'>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default User;
