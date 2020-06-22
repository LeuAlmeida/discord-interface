import React from "react";

import { Container, Emoji, Warning, Description, Button } from "./styles";

const ErrorScreen = () => {
  return (
    <Container>
      <Emoji />
      <Warning>I'm sorry for this.</Warning>
      <Description>Unfortunately this application was developed only for desktop, for study purposes.</Description>
      <Button href="https://github.com/LeuAlmeida">
        <span>My GitHub</span>
      </Button>
    </Container>
  );
};

export default ErrorScreen;
