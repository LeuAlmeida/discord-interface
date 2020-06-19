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

const ServerName: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src="https://avatars1.githubusercontent.com/u/42948574?s=460&u=cf88494dc9252d1a4dcb15268def6abc58365f69&v=4" />
        
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
