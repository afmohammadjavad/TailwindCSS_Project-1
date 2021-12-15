import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <h1 className="text-3xl p-2 font-bold underline text-blue-400 bg-gray-300 dark:bg-primary dark:text-secondary
      trans">
        Hello world!
      </h1>
      <h1
        className="text-green-500 p-2 dark:text-green-700 font-bold text-3xl bg-blue-400 dark:bg-blue-900
      trans"
      >
        Salam Donya!
      </h1>
      <button
        className="border-2 p-2 mt-2 border-amber-700 bg-yellow-200 hover:bg-amber-300 hover:scale-125 trans "
        onClick={() => setDarkMode((d) => !d)}
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;
