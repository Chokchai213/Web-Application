import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import SignUpSignInModal from './SignUpSignInModal';
function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SignUpSignInModal mode = 'Register'></SignUpSignInModal>
          <SignUpSignInModal mode = 'Login'></SignUpSignInModal>
          <Button>Log Out</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
