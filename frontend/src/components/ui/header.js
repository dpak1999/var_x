import React from "react"
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core"

// logos
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: "red",
  },

  logoText: {
    color: theme.palette.common.black,
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>VAR</span> X
          </Typography>
        </Button>
        <Tabs
          value={0}
          classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}
        >
          <Tab label="Hats" />
          <Tab label="Hoodies" />
          <Tab label="Shirts" />
          <Tab label="Contact Us" />
        </Tabs>
        <IconButton>
          <img src={search} alt="Search" />
        </IconButton>
        <IconButton>
          <img src={cart} alt="Cart" />
        </IconButton>
        <IconButton>
          <img src={account} alt="Account" />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.defaultProps = {}

export default Header
