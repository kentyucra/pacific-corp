import React from "react"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => {
    return {
        carouselBanner: {
            height: "100%",
            width: "100%",
            objectFit: "cover"
        }
    }
})

function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    const classes = useStyles();
    return (
        <Paper className={classes.paperContainer}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default function LandingPage() {
    const classes = useStyles()
    const banners = [
        {url: "https://socopur.com/wp-content/uploads/2021/12/fondo-1.png", name:"banner1"},
        {url: "https://socopur.com/wp-content/uploads/2021/12/fondo-2.png", name:"banner2"},
        {url: "https://socopur.com/wp-content/uploads/2021/12/fondo-3.png", name:"banner3"},
        {url: "https://socopur.com/wp-content/uploads/2021/12/fondo-4.png", name:"banner4"},
    ]

    const motos = [
        {url: "https://socopur.com/wp-content/uploads/2021/03/motocicleta-lifan-liberty-280x280.jpg", name: "lifan-liberty"},
        {url: "https://socopur.com/wp-content/uploads/2021/03/cheat-thumb-280x280.jpg", name: "moto 2"},
        {url: "https://socopur.com/wp-content/uploads/2020/03/DASH-125-280x280.jpg", name: "moto 3"},
    ]

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container style={{padding: "1em", border: "1px solid red"}} justifyContent="center" >
                    <Carousel style={{width: "auto"}}>
                        {banners.map(banner => {
                            return <img className={classes.carouselBanner} alt={banner.name} src={banner.url} />
                        })}
                    </Carousel>
                </Grid>

            </Grid>
            <Grid item>
                <Grid container justifyContent="center">
                    {motos.map(moto => {
                     return <Grid item>
                        <img alt="moto1" src={moto.url} />
                        <Typography style={{textAlign: "center"}}>
                            Modelo-Anho
                        </Typography>
                    </Grid>
 
                    })}
               </Grid>
            </Grid>
        </Grid>
    )

}