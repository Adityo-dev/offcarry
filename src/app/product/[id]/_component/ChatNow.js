import { MessageCircleMore } from "lucide-react";

function ChatNow() {
  return (
    <div className="w-full h-28 bg-[#F5F5F5] p-4 rounded-lg flex justify-between items-center px-8 ">
      <div className="space-y-2">
        <p className="text-2xl font-medium text-[#38311F]">Have a Question?</p>
        <p className="text-sm text-[#837F74]">Start Conversation with Seller</p>
      </div>
      <button className="bg-[#9ED2FF] text-[#38311F] px-8 py-3 rounded-full font-semibold flex items-center gap-1">
        <MessageCircleMore size={25} strokeWidth={1.5} />
        Chat Now
      </button>
    </div>
  );
}

export default ChatNow;
