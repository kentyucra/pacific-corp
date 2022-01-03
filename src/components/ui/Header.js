import React, { useEffect, useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import UseScrollTrigger from "@material-ui/core/useScrollTrigger"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Menu, MenuItem } from "@material-ui/core"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { SwipeableDrawer } from "@material-ui/core"
import { List, ListItem, ListItemText, ListItemIcon} from "@material-ui/core"

import Link from "react-router-dom/Link"

import { WhatsApp, Facebook } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"

import tmp_logo from "../../assets/tmp_logo.png"
import { Button, IconButton } from "@material-ui/core"

function ElevationScroll(props) {
    const { children } = props

    const trigger = UseScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => {
    return {
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "1em",
            [theme.breakpoints.down("md")]: {
                marginBottom: "0.3em"
            },
            [theme.breakpoints.down("xs")]: {
                // marginBottom: "0.5em"
            }
        },
        logo: {
            height: "6em",
            marginLeft: "30px",
            [theme.breakpoints.down("md")]: {
                height: "5em"
            },
            [theme.breakpoints.down("xs")]: {
                height: "4.5em"
            }
        },
        logoContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        tabContainer: {
            marginLeft: "auto",
            marginRight: "30px"
        },
        tab: {
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px"
        },
        social: {
            marginRight: "30px"
        },
        menu: {
            backgroundColor: theme.palette.common.blue,
            color: "white",
            borderRadius: "0px"
        },
        menuItem: {
            ...theme.typography.tab,
            opacity: 0.7,
            "&:hover": {
                opacity: 1
            }
        },
        drawerIcon: {
           height: "40px" ,
           width: "40px"
        },
        drawerIconContainer: {
            marginLeft: "auto",
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        drawer: {
            backgroundColor: theme.palette.common.blue
        },
        drawerItem: {
            ...theme.typography.tab,
            color: "white",
            opacity: 0.7
        },
        drawerItemSelected: {
            opacity: 1
        },
        appBar: {
            zIndex: theme.zIndex.modal + 1
        },
        drawerItemSocial: {
            ...theme.typography.tab,
            color: "white",
            opacity: 0.7,
            marginLeft: "auto"
        }
    }
})

export default function Header({value, setValue, selectedIndex, setSelectedIndex}) {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    // This one if for the menu in Services
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    // For drawer
    const [openDrawer, setOpenDrawer] = useState(false)
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(index)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOptions = [
        { name: "Servicios", link: "/servicios", activeIndex: 5, selectedIndex: 0},
        { name: "Servicio 1", link: "/servicio1", activeIndex: 5, selectedIndex: 1},
        { name: "Servicio 2", link: "/servicio2", activeIndex: 5, selectedIndex: 2},
        { name: "Servicio 3", link: "/servicio3", activeIndex: 5, selectedIndex: 3},
    ]
    
    const routes = [
        {name: "Inicio", link: "/", activeIndex: 0},
        {name: "Motocicletas", link: "/motocicletas", activeIndex: 1},
        {name: "Motocargas", link: "/motocargas", activeIndex: 2},
        {name: "Cascos", link: "/cascos", activeIndex: 3},
        {name: "Repuestos", link: "/repuestos", activeIndex: 4},
        {// This route open a menu
            name: "Servicios", 
            link: "/servicios", 
            activeIndex: 5,
            ariaOwns: anchorEl ? "service-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: (event) => handleClick(event)
        }
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            if (window.location.pathname === route.link) {
                if (value !== route.activeIndex) {
                    setValue(route.activeIndex)
                    if (route.selectedIndex && selectedIndex !== route.selectedIndex) {
                        setSelectedIndex(route.selectedIndex)
                    }
                }
            }
        })
    }, [value, menuOptions, routes, selectedIndex])

    const tabs = (
        <>
            <Tabs value={value} onChange={handleChange}
                className={classes.tabContainer} indicatorColor="secondary">
                {routes.map(route => {
                    return <Tab
                        component={Link}
                        to={route.link}
                        className={classes.tab}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaHaspopup}
                        onMouseOver={route.mouseOver}
                    />
                })}
            </Tabs>
            <div className={classes.social}>
                <IconButton href='https://api.whatsapp.com/send?phone=51996833333'
                    target="_blank" aria-label="whatsapp">
                    <WhatsApp />
                </IconButton>
                <IconButton href='https://www.facebook.com/pacificmotosperu'
                    target='_blank' aria-label="facebook">
                    <Facebook />
                </IconButton>
            </div>
            <Menu
                id="service-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                style={{zIndex: 1302}}
            >
                {menuOptions.map((option, index) => {
                    return <MenuItem
                        key={option.name}
                        component={Link}
                        to={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(e) => {
                            handleMenuItemClick(e, index)
                            setValue(5)
                        }}
                        selected={index === selectedIndex && value === 5}
                    >
                        {option.name}
                    </MenuItem>
                })}
            </Menu>
        </>
    )
    
    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => {
                        return <ListItem 
                            onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}} 
                            divider 
                            button 
                            component={Link} 
                            to={route.link}
                        >
                            <ListItemText
                                className={
                                    value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem
                                }
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    })}
                    {/* <ListItem>
                        <ListItemIcon className={{padding: "none"}}>
                            <WhatsApp />
                        </ListItemIcon>
                        <ListItemText className={classes.drawerItemSocial} disableTypography>
                            WhatsApp
                        </ListItemText>
                    </ListItem> */}
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} 
            onClick={() => setOpenDrawer(!openDrawer)} disableRipple >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    
    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" disableRipple
                        className={classes.logoContainer} onClick={() => setValue(0)}>
                            <img alt="company logo" className={classes.logo} src={tmp_logo} />
                        </Button>
                        {matches ? drawer : tabs}                    
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}