import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('/auth').then(({ data }) => {
                setUser(data);
            });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}
