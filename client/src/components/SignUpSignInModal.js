import * as React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { signInWithGooglePopup } from "../utils/firebase.utils";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import { Login } from '../store/UserSlice';
const baseURL = "http://localhost:8000/auth";

function OverlayLoading({ isLoading }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(isLoading);
    }, [isLoading]);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default function SignUpSignInModal({ mode }) {
    const userStore = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setisLoading] = React.useState(false);
    const SignInWithGoogle = async () => {
        setisLoading(true)
        await signInWithGooglePopup().then(response => {
            dispatch(Login(response.user))
            localStorage.setItem('userData', JSON.stringify(response.user))
            setisLoading(false)
            setOpen(false)
        }).catch(error => {
            console.log(error)
        });
    }
    function register() {
        setisLoading(true)
        axios.post(`${baseURL}/signup`, {
            email: email,
            password: password
        })
            .then((response) => {
                dispatch(Login(response.user))
                localStorage.setItem('userData', JSON.stringify(response.user))
                setisLoading(false)
                setOpen(false)
            })
            .catch(error => {
                console.log('An Error Occured', error);
            });
    }
    function signin() {
        setisLoading(true)
        axios.post(`${baseURL}/signin`, {
            email: email,
            password: password
        })
            .then((response) => {
                dispatch(Login(response.data.signInData))
                localStorage.setItem('userData', JSON.stringify(response.data.signInData))
                setisLoading(false)
                setOpen(false)
            })
            .catch(error => {
                console.log('An Error Occured', error);
            });
    }
    return (
        <React.Fragment>
            <OverlayLoading isLoading={isLoading} />
            <Button
                variant="primary"
                color="neutral"
                onClick={() => setOpen(true)}
            >
                {mode}
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog>
                    <DialogTitle>{mode}</DialogTitle>
                    <DialogContent>{`${mode} using Email and Password`}</DialogContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            mode === 'Register' ? register(email, password) : signin(email, password)
                            setOpen(false);
                        }}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input autoFocus required onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input required onChange={(e) => setPassword(e.target.value)} type="password" />
                            </FormControl>
                            <Button type="submit">{mode}</Button>
                            <DialogContent>{`${mode} with other provider`}</DialogContent>
                            <Button variant="outlined" startIcon={<GoogleIcon />} onClick={SignInWithGoogle}>
                                {mode} with Google
                            </Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}