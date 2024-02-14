import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const baseURL = "http://localhost:8000/auth";
export default function SignUpSignInModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = React.useState(null);

    function register() {
        axios.post(`${baseURL}/signup`, {
            email: email,
            password: password
        })
            .then((response) => {
                setUser(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    function signin() {
        axios.post(`${baseURL}/signin`, {
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }
    function logout() {
        setUser(null)
    }

    return (
        <div>

            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <body>
                        <h1>Sign-Up</h1>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button onClick={register}>Register</button>
                        <h1>Sign-In</h1>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button onClick={signin}>Sign-In</button>
                        <h1>Logout</h1>
                        <button onClick={logout}>logout</button>
                        {user && (
                            <div>
                                <h2>Current User:</h2>
                                <p>{JSON.stringify(user)}</p>
                            </div>
                        )}
                    </body>
                </Box>
            </Modal>
        </div>
    );
}
