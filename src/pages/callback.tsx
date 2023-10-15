import { getAuth, getRedirectResult } from 'firebase/auth';
import { auth } from '@/firebase';
import { useEffect } from 'react';

function Callback() {
  const authInstance = getAuth();

  useEffect(() => {
    getRedirectResult(authInstance)
      .then((result) => {
        if (result?.user) {
          // Successful Google login
          console.log('Google User:', result.user);
          // Set user in state or perform other actions
        }
      })
      .catch((error) => {
        console.error('Google login error:', error);
      });
  }, []);

  return (
      <div>
        loading...
      </div>
  );
}

export default Callback;
