export default function Messsage({}: {}) {
  return (
    <div className="flex flex-wrap">
      <span className="text-green-600 text-nowrap text-lg">C:\</span>
      <input
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            alert("You have entered: " + (e.target as HTMLInputElement).value);
          }
        }}
        className="w-12/12 h-full border-none appearance-none active:appearance-none focus:outline-none focus:ring-0 focus:border-none mb-auto"
        placeholder=">"
        autoFocus
      ></input>
    </div>
  );
}
