const ChatBody = () => {
  const aiStyle =
    "bg-white bg-opacity-20 backdrop-blur-lg dropshadow-md mr-auto";
  const messageStyle =
    "border-2 border-[#999999] break-words self-end p-3 rounded-xl max-w-[80%]";
  const textStyle = "whitespace-pre-wrap";

  return (
    <section className="flex flex-col gap-4 text-xl">
      {/* client message */}
      <div className={`${messageStyle} self-end`}>
        <pre className={textStyle}>
          <span>Hi, how are you? How have been lately?</span>
        </pre>
      </div>

      {/* ai message */}
      <div className={`${messageStyle} self-start ${aiStyle}`}>
        <pre className={textStyle}>
          <span>Hello, I am doing well. How can I assist you today?</span>
        </pre>
      </div>
    </section>
  );
};

export default ChatBody;
