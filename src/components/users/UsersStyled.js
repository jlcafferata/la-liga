import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { Form } from "formik";
import styled from "styled-components";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const UserCardCard = styled(Card)`
  max-width: 95%;
`;

export const UserCardActions = styled(CardActions)`
  flex-direction: row-reverse;
`;

export const UserMainContainer = styled.div`
  flex-grow: 1;
`;

export const UserPaper = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const UserDetailFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 15rem;
  justify-content: space-between;
  padding: 1.5rem;
  align-items: center;
`;
