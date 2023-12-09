import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    maxWidth: "450px",
    marginTop: theme.spacing(10),
    marginLeft: "auto",
    marginRight: "auto"
  },
  titleLine: {
    position: "relative",
    display: "block",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    height: "4px",
    width: theme.spacing(8),
    background: "#e74b3c"
  },
  children: {
    position: "relative"
  }
}));

const BlockMessage = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography variant="h5">{title}</Typography>
          <div className={classes.titleLine}></div>
        </div>
        <div className={classes.children}>
          {typeof children === "string" ? (
            <Typography variant="subtitle1">{children}</Typography>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

BlockMessage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BlockMessage;
