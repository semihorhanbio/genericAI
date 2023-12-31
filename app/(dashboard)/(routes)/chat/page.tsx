import { Heading } from "@/components/heading";

const ChatPage = () => {
  return (
    <div>
        <Heading
            title="Chatbot"
            description="Chat with an AI assistant."
            src="/chatbot.png"
        />
        <div className="px-4 lg:px-8"></div>
    </div>
  )
}

export default ChatPage