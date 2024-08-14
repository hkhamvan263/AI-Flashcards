'use client'
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

export default function SignUpPage() {
    return (
        <Container maxWidth="sm">
            <AppBar position="static" sx={{backgroundColor: '#3f51b5'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{flexGrow: 1,
                        }}
                    >
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href='/login' passHref>
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href='/signup' passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display="flex"
                flexDirection="column"
                alignItems='center'
                justifyContent='center'
            >
                <Typography variant="h4" gutterBottom>Sign In</Typography>
            </Box>
        </Container>
    );
}