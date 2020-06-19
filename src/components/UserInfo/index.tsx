import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

import avatars from "../../static/avatars";

const ServerName: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src={avatars.LeuAlmeida} />

        <UserData>
          <strong>Léu Almeida</strong>
          <span>#8583</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default ServerName;
