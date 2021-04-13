import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Error } from "../../../AppStyled";
import { appConfig } from "../../../env/configuration";
import { Progress } from "../../commons/progress";
import { DialogContent, DialogTitle } from "../UsersStyled";
import UserDetailForm from "./UserDetailForm";

export default function UserDetail({ onClose, userToFind }) {
  const dispatch = useDispatch();
  const [userFound, setUserFound] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userToFind) {
      toggleLoading(true);
      axios
        .get(`${appConfig.apiUrl}/users/${userToFind.id}`)
        .then((user) => {
          toggleLoading(false);
          const { data: { data: userFound = [] } = {} } = user;
          setUserFound(userFound);
        })
        .catch((error) => {
          toggleLoading(false);
          setError(error);
        });
    }
  }, [userToFind, dispatch]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <DialogTitle onClose={handleClose}>Detalle de usuario</DialogTitle>
      {loading && <Progress />}
      {error && <Error>{error}</Error>}
      <DialogContent dividers>
        <UserDetailForm user={userFound} onFinish={handleClose} />
      </DialogContent>
    </div>
  );
}
