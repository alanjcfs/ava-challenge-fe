import { FC, useEffect, useState } from 'react';

const url = process.env.NODE_ENV === 'production' ? 'https://ava-challenge-fe.herokuapp.com' : 'http://localhost:3001/conversations';

const Conversations: FC = () => {
  const [ conversations, setConversations ] = useState<any[]>([]);

  useEffect(() => {
    fetch(url).then((resp) => resp.json()).then((data) => setConversations(data.conversations));
  }, [])

  if (conversations.length === 0) {
    return <h1>No conversations</h1>
  }

  return (
    <ul>
      {conversations.map((conversation) => {
        return <li>{conversation.text}</li>;
      })}
    </ul>
  )
}



export default Conversations;
