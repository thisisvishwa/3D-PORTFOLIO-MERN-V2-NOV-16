```javascript
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('/user/authenticated')
            .then(res => {
                setUser(res.data.user);
                setIsAuthenticated(res.data.isAuthenticated);
                setIsLoaded(true);
            });
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser, isLoaded}}>
            { props.children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
```