import React from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@material-ui/core"

// logos
import search from "../../images/search.svg"
import cart from "../../images/cart.svg"
import account from "../../images/account-header.svg"

const Header = ({ siteTitle }) => {
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">VAR X</Typography>
        </Button>
        <Tabs>
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

Header.propTypes = {}

Header.defaultProps = {}

export default Header
