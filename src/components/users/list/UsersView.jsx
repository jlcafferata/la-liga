import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../AppStyled";
import {
  deleteUser,
  resetFlags,
} from "../../../redux/updateUser/actions";
import UserDetail from "../detail/UserDetail";
import {
  DialogContent,
  DialogTitle,
  UserMainContainer,
  UserPaper,
} from "../UsersStyled";
import UserCard from "./UserCard";

export default function UsersView({ users }) {
  const dispatch = useDispatch();
  const [isUserDetailOpen, toggleIsUserDetailOpen] = useState(false);
  const [isDeleteOpen, toggleIsDeleteOpen] = useState(false);
  const [userToView, setUserToView] = useState({});
  const { error = "" } = useSelector((state) => state.updateUser);

  const handleUserDetailToggle = () => {
    toggleIsUserDetailOpen(!isUserDetailOpen);
  };

  const handleEditClicked = (user) => {
    setUserToView(user);
    handleUserDetailToggle();
  };

  const handleDeleteToggle = async () => {
    toggleIsDeleteOpen(!isDeleteOpen);
    dispatch(resetFlags());
  };

  const handleDeleteClicked = (user) => {
    setUserToView(user);
    handleDeleteToggle();
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteUser(userToView));
  };

  return (
    <UserMainContainer>
      <Grid container>
        {users.map((user) => (
          <Grid item xs={12} sm={6} key={user.id}>
            <UserPaper>
              <UserCard
                user={user}
                onClickEdit={handleEditClicked}
                onClickDelete={handleDeleteClicked}
              />
            </UserPaper>
          </Grid>
        ))}
      </Grid>
      <Dialog onClose={handleUserDetailToggle} open={isUserDetailOpen}>
        <UserDetail onClose={handleUserDetailToggle} userToFind={userToView} />
      </Dialog>

      <Dialog
        open={isDeleteOpen}
        onClose={handleDeleteToggle}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Confirmación
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Realmente desea eliminar el usuario?
          </DialogContentText>
        </DialogContent>
        <Error>{error}</Error>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleDeleteToggle}
            variant="contained"
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </UserMainContainer>
  );
}
