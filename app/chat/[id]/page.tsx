import Chat from "./Chat"
import ChatInput from "./ChatInput"

type Props = {
  param : {
    id : string
  }
}

function page ({params : {id}} : Props) {
  
  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      {/* chat window */}
      <Chat chatId = {id}></Chat>
      {/* chat input */}
      <ChatInput chatId = {id}></ChatInput>
    </div>
  )
}

export default page