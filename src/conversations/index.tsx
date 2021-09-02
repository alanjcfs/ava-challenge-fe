import { FC } from 'react';
import conversations from './simple-conversations';

const Conversations: FC = () => {
  return (
    <ul>
    {conversations.map((conversation) => {
      return <li>{conversation.text}</li>;
    })}
    </ul>
  )
}

export default Conversations;
