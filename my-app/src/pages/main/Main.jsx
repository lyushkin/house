import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../../components/cards/Cards";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 50,
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v1/house")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {data.map((item) => (
                    <Grid key={item.id} item xs={3} spacing={6}>
                        <ImgMediaCard
                            title={item.title}
                            image={item.image}
                            address={item.address}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
