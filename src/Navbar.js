import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
const content = {
  english: {
    search: "Search",
    abb: "ENG"
  },
  french: {
    search: "Chercher",
    abb: "FR"
  },
  spanish: {
    search: "Buscar",
    abb: "ESP"
  }
};

function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { classes } = props;
  const { language } = useContext(LanguageContext);
  const { search, abb } = content[language];
  return (
    <div className={classes.root}>
      <AppBar postion="static" color={isDarkMode ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{abb.toUpperCase()}</span>
          </IconButton>
          <Typography variant="h6" className={classes.title} color="inherit">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
