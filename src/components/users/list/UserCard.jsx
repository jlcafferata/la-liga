import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { UserCardActions, UserCardCard } from "../UsersStyled";

export default function UserCard({ user = {}, onClickEdit, onClickDelete }) {
  const { first_name = "", last_name = "", email = "", avatar = "" } = user;
  const fullName = `${first_name} ${last_name}`;

  const handleOnClickEdit = () => {
    onClickEdit(user);
  };

  const handleOnClickDelete = () => {
    onClickDelete(user);
  };

  return (
    <UserCardCard>
      <CardHeader
        avatar={<Avatar src={avatar}></Avatar>}
        title={fullName}
        subheader={email}
      />
      <UserCardActions disableSpacing>
        <IconButton aria-label="Edit" onClick={handleOnClickEdit}>
          <CreateIcon />
        </IconButton>
        <IconButton aria-label="Remove" onClick={handleOnClickDelete}>
          <DeleteIcon />
        </IconButton>
      </UserCardActions>
    </UserCardCard>
  );
}
