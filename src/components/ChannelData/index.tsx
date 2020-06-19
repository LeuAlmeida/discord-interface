import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Léu Almeida"
            date="18/07/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <ChannelMessage
          hasMention
          author="Léu Almeida"
          date="18/07/2020"
          content={
            <>
              <Mention>@Léu Almeida</Mention>, tudo bem?
            </>
          }
        />

        <ChannelMessage
          author="Léu Almeida"
          date="18/07/2020"
          content="Hoje é o meu aniversário!"
        />

        <ChannelMessage
          hasMention
          isBot
          author="Botzão Legalzão"
          date="18/07/2020"
          content={
            <>
              Oi <Mention>@Léu Almeida</Mention>, eu sou um bot
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
