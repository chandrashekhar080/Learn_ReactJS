import { useCallback, useEffect, useRef, useState } from "react";
/*useState: To manage state (e.g. password, settings).

useRef: For directly referencing DOM elements (input field).

useEffect: To trigger code when dependencies change (e.g. regenerate password).

useCallback: To memoize functions (prevent re-creation unless dependencies change)
*/
//App is your main functional component.
function App() {
  const [password, setPassword] = useState(""); //Holds the generated password
  const [length, setLength] = useState(8); //Controls the length of the password, default is 8.
  const [isNumAllowed, setNumAllowed] = useState(false); //Boolean to toggle numbers in the password.
  const [isCharAllowed, setCharAllowed] = useState(false); //Boolean to toggle special characters in the password.
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null); //Used to select the input box when copying the password.

  //Memoized function to avoid recreating it unless dependencies change
  const passwordGenerator = useCallback(() => {
    //Initialize an empty pass string and str with alphabets
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //Append numbers and special characters based on checkboxes.
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*()-_=+|[]{};:/?.>";

    //Loop to create password of specified length.
    //Picks a random character from str
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      // console.log(char);

      pass += str.charAt(char);
      // console.log(pass);
    }
    //Updates the password state.
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  useEffect(() => {
    //Auto-generates password whenever:
    //length, isCharAllowed, or isNumAllowed changes.
    passwordGenerator();
  }, [length, isCharAllowed, isNumAllowed, passwordGenerator]);
  /*
  Selects the password text.

Copies it to clipboard using browser API.

? is optional chaining for safety.
*/
  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  }, [password]);

  //passwordGenerator();
  //Starts returning the UI structure.
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500"
        id="mainContainer"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
          id="container"
          className="flex shadow border-blue-400 rounded-lg overflow-hidden mb-4"
        >
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 border-blue-400 outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            id="copybtn"
            onClick={copyPasswordtoClipboard}
            className={`outline-none px-3 py-0.5 shrink-0 cursor-pointer transition-colors duration-300 ${
              copied ? "bg-green-600" : "bg-blue-700"
            } text-white`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div id="dependencies" className="flex text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={isNumAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={isCharAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
