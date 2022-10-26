import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Login = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary">Login with Google</Button>
                <Button variant="outline-secondary">Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;