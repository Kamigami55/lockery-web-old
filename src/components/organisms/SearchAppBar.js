import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

SearchAppBar.propTypes = {
  onBackButtonClick: PropTypes.func.isRequired,
  showBackButton: PropTypes.bool.isRequired
};
SearchAppBar.defaultProps = {
  onBackButtonClick: () => {},
  showBackButton: false
};

const ButtonPlaceholder = styled.div`
  width: 36px;
  min-width: 36px;
  height: 48px;
  padding: 12px;
`;

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: "#F4F4F5",
    boxShadow: "0 0.5px rgba(0,0,0,0.3)"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar(props) {
  const { onBackButtonClick, showBackButton } = props;
  const classes = useStyles();

  return (
    <AppBar color="default" className={classes.appbar}>
      <Toolbar>
        {showBackButton ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={onBackButtonClick}
          >
            <ArrowBackIosIcon />
          </IconButton>
        ) : (
          <ButtonPlaceholder />
        )}

        <Typography className={classes.title} variant="h6" noWrap>
          Lockery
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <ButtonPlaceholder />
      </Toolbar>
    </AppBar>
  );
}
