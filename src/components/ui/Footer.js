import React from 'react';
import Link from "react-router-dom/Link"
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid"
import { Hidden } from '@material-ui/core';
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

import footerAdornment from "../../assets/Footer Adornment.svg"

const useStyles = makeStyles(theme => {
    return {
        footer: {
            backgroundColor: theme.palette.common.blue,
            width: "100%",
            zIndex: 1302,
            position: "relative"
        },
        adornment: {
            width: "25em",
            verticalAlign: "bottom",
            [theme.breakpoints.down("md")]: {
                width: "21em"
            },
            [theme.breakpoints.down("xs")]: {
                width: "15em"
            }
        },
        mainContainer: {
            position: "absolute"
        },
        link: {
            color: "white",
            fontFamily: "Arial",
            fontSize: "0.75rem",
            fontWeight: "bold",
            textDecoration: "none"
        },
        gridItem: {
            margin: "3em"
        },
        icon: {
            height: "4em",
            width: "4em",
            [theme.breakpoints.down("xs")]: {
                height: "2em",
                width: "2em"
            }
        },
        socialContainer: {
            position: "absolute",
            marginTop: "-6em",
            right: "1.5em",
            [theme.breakpoints.down("xs")]: {
                right: "0.6em"
            }
        }
        
    }
})

export default function Footer({value, setValue, selectedIndex, setSelectedIndex}) {
    const classes = useStyles();

    return <footer className={classes.footer}>
        <Hidden mdDown>
            <Grid container className={classes.mainContainer} justify="center">
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => setValue(0)} component={Link} to="/" className={classes.link}>
                            Inicio
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => { setValue(1) }} component={Link} to="/motocicletas" className={classes.link}>
                            Motocicletas
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => setValue(2)} component={Link} to="/motocargas" className={classes.link}>
                            Motocargas
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => setValue(3)} component={Link} to="/cascos" className={classes.link}>
                            Cascos
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => setValue(4)} component={Link} to="/repuestos" className={classes.link}>
                            Repuestos
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item onClick={() => {setValue(5); setSelectedIndex(0)}} component={Link} to="/servicios" className={classes.link}>
                            Servicios
                        </Grid>
                        <Grid item onClick={() => {setValue(4); setSelectedIndex(1)}} component={Link} to="/servicio1" className={classes.link}>
                            Servicio 1
                        </Grid>
                        <Grid item onClick={() => {setValue(4); setSelectedIndex(2)}} component={Link} to="/servicio2" className={classes.link}>
                            Servicio 2
                        </Grid>
                        <Grid item onClick={() => {setValue(4); setSelectedIndex(3)}} component={Link} to="/servicio3" className={classes.link}>
                            Servicio 3
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Hidden>
        <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />

        <Grid container spacing={2} justify="flex-end" className={classes.socialContainer}>
            <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" src={facebook} className={classes.icon}/>
            </Grid>
            <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                <img alt="twitter logo" src={twitter} className={classes.icon}/>
            </Grid>
            <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <img alt="instagram logo" src={instagram} className={classes.icon}/>
            </Grid>
        </Grid>
    </footer>

}