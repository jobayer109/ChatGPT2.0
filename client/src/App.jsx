// import "./App.css";

import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <section className="bg-[#1A232E] relative h-screen py-6 sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle">
      {/* ________________Gradients_____________________ */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* _________________Header________________________ */}
      <div className="text-4xl font-bold tracking-wider uppercase text-white text-center opacity-90 mb-4">
        ChatGPT 2.0
      </div>
      {/* _________________Chat Body____________________ */}
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center">
        <ChatBody />
      </div>

      {/* Chat Input */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput />
      </div>
    </section>
  );
}

export default App;
