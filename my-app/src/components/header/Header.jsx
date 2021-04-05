import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link, NavLink} from "react-router-dom";
import Modal from '@material-ui/core/Modal';

//import MenuIcon from "@material-ui/icons/Menu";
//import SearchIcon from "@material-ui/icons/Search";

function getModalStyle() {
    return {
        top: `0%`,
        left: `0%`,
        width:"400px",
        backgroundColor:'#800080',
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
links:{
        color:"#FFFFFF",
    textDecoration:"none"
},
    active:{
        color: '#ffde09'
    }
}));

export default function Header() {
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        {/*<MenuIcon/>*/}
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <NavLink exact activeClassName={classes.active} className={classes.links} to="/">House KG</NavLink>
                    </Typography>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <NavLink exact activeClassName={classes.active} className={classes.links} to="/map">На карте</NavLink>
                    </Typography>
                    <Typography onClick={handleOpen} className={classes.title} variant="h6" noWrap>
                        Вход
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>{/*<SearchIcon />*/}</div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">Authorization</h2>
                    <input type='email' placeholder={'Email'}/><br/>
                    <input type='password' placeholder={'Password'}/><br/>
                    <button>Регистрация</button>

                </div>

            </Modal>
        </div>
    );
}
