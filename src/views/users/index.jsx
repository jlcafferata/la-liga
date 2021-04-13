import Container from "@material-ui/core/Container";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/laLigaLogo.svg";
import { Progress } from "../../components/commons/progress";
import UsersView from "../../components/users";
import { appConfig } from "../../env/configuration";

const Users = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading, toggleLoading] = useState(false);

  useEffect(() => {
    toggleLoading(true);
    axios
      .get(`${appConfig.apiUrl}/users`)
      .then((users) => {
        toggleLoading(false);
        const { data: { data: usersStored = [] } = {} } = users;
        setUsers(usersStored);
      })
      .catch((error) => {
        toggleLoading(false);
      });
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <img alt="La liga" src={logo} />
      {loading && <Progress />}
      {!loading && <UsersView users={users} />}
    </Container>
  );
};

export default Users;
