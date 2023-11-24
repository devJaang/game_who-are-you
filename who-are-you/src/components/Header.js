import { AppBar, Avatar, Container, Grid, Icon, Toolbar, Typography } from "@mui/material";
import React from "react";


function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar src="/images/logo.png" sx={{mr:2}} />
                    <Grid >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex'  },
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        아장부부
                    </Typography>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>

    );
}

export default Header;