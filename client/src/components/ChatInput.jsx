import sendIcon from "../assets/send.png";

const ChatInput = () => {
  return (
    <section className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative">
      <textarea
        rows={1}
        className="bg-transparent border-0 outline-none w-11/12"
      />
      <img
        width={20}
        src={sendIcon}
        alt="send icon"
        className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
      />
    </section>
  );
};

export default ChatInput;
