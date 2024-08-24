import * as React from "react";
// import { CarouselCards } from "./sections/carousel-cards";

const Page = async () => {
  return (
    // <main>
    //   <div className="flex items-center justify-center mt-6">
    //     This is my page
    //   </div>
    // </main>
    <main className="flex flex-col h-[50vh] w-[50vw] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div id="chat-box" className="flex-1 p-4 overflow-y-auto">
        {/* {messages.map((message, index) => ( */}
            <div
                // key={index}
                className={`mb-4 px-4 py-2 rounded-lg max-w-xs `}
                //   ${
                //     // message.type === 'user'
                //     //     ? 'bg-blue-100 self-end'
                //     //     : 'bg-gray-200 self-start'
                // }
                
            >
                {/* {message.text} */}
            </div>
        {/* ))} */}
    </div>
    <div className="flex items-center p-4 border-t border-gray-200">
        <input
            id="user-input"
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
            // onClick={handleSendClick}
            className="ml-4 px-4 py-2 bg-gray-300 text-white rounded-full hover:bg-black"
        >
            Send
        </button>
    </div>
</main>
  );
};

export default Page;
