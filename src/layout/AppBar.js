import React from "react";
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import CustomUserMenu from "./CustomUserMenu";

//TODO: use themes, get style from themes
const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const CustomAppBar = (props) => {
    const classes = useStyles();
    return (
        <AppBar {...props} elevation={1} userMenu={<CustomUserMenu /> } style={{ background: '#2E3B55' }}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <span className={classes.spacer}>
               VAS Government Agency
            </span>
        </AppBar>
    );
};

export default CustomAppBar;