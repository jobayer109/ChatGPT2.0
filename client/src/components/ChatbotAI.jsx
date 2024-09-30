const ChatbotAI = () => {
  const aiStyle = "bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md";

  return (
    <section className="flex flex-col gap-4 text-xl">
      {/* client message */}
      <div className="border-2 border-[#999999] break-words self-end p-3 rounded-xl max-w-[80%]">
        <pre>
          <span>Hi, how are you?</span>
        </pre>
      </div>

      {/* ai message */}
      <div
        className={`border-2 border-[#999999] break-words self-start p-3 rounded-xl max-w-[80%] ${aiStyle}`}
      >
        <pre>
          <span>Hello, I am doing well. How can I assist you today?</span>
        </pre>
      </div>
    </section>
  );
};

export default ChatbotAI;
