import styled from "styled-components";
import { Crown } from "styled-icons/fa-solid";

import avatars from "../../static/avatars";

interface AvatarProps {
  src?: string;
  isBot?: boolean;
}

export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: var(--secondary);

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;

    color: var(--gray);
    font-size: 14px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;

    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  flex-shrink: 0;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: var(--primary)
    ${(props) =>
      props.src ? `url('${props.src}')` : `url('${avatars.default}')`};
  background-size: 32px 32px;

  &.bot {
    background: var(--primary) url('${avatars.bot}');
    background-size: 32px 32px;
  }
`;

export const OwnerIcon = styled(Crown)`
  margin-left: 9px;

  width: 16px;
  height: 16px;

  color: var(--mention-detail);
`;
