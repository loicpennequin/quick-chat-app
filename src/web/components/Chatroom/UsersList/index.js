import React, { useEffect } from 'react';
import useUsers from '../../../hooks/useUsers';
import { Wrapper, Item } from './styles';

const UsersList = () => {
    const { users, getUsers } = useUsers();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <Wrapper>
            {users.map(user => (
                <Item key={user}>{user}</Item>
            ))}
        </Wrapper>
    );
};

export default UsersList;
