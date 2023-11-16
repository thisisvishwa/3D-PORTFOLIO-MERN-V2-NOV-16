```javascript
import jwtDecode from 'jwt-decode';

export function getJwt() {
  return localStorage.getItem('token');
}

export function getUser() {
  const jwt = getJwt();
  return jwtDecode(jwt);
}

export function isLoggedIn() {
  const jwt = getJwt();
  if (!jwt) return false;

  const { exp: expiration } = jwtDecode(jwt);
  const currentTime = Date.now() / 1000;

  return currentTime < expiration;
}

export function login(token) {
  localStorage.setItem('token', token);
}

export function logout() {
  localStorage.removeItem('token');
}
```