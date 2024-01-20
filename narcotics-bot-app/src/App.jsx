
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import { useState } from 'react'

function App() {
  const [message, setMassages] = useState([
    {
      message: "Hello, I am ChatBot",
      sender: "ChatBot"
    }

  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user"
    }

    const newMessages=[<div styleName={styles.messages}></div>,newMessage]
  }

  return (

    <div className='App'>

      <div className='chatBot'>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {message.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>

    </div>


  )
}

export default App
