import React from "react";

import { Container, Role, User, Avatar, OwnerIcon } from "./styles";
import avatars from "../../static/avatars";

interface UserProps {
  nickname: string;
  isBot?: boolean;
  isOwner?: boolean;
  avatar?: string;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot, isOwner, avatar }) => {
  return (
    <User>
      <Avatar src={avatar || ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
      {isOwner && <OwnerIcon />}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Léu Almeida" isOwner avatar={avatars.LeuAlmeida} />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot avatar={avatars.bot} />
    </Container>
  );
};

export default UserList;
