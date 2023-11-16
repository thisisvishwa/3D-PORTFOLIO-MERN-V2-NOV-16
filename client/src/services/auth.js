```javascript
import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

const loadUser = async () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const register = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/users', formData, config);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const login = async formData => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/auth', formData, config);
    return res.data;
  } catch (err) {
    console.error(err.message);
  }
};

const logout = () => {
  setAuthToken(false);
};

export default {
  setAuthToken,
  loadUser,
  register,
  login,
  logout
};
```