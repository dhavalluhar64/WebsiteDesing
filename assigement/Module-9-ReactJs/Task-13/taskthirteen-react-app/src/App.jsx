import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Card from "./Component/Card";
import Button from "./Component/Button";

// Task 1:
// • Create a simple theme toggle (light/dark mode) using the Context API. The themestate
// should be shared across multiple components.

function App() {
  const [themeMode, setThemode] = useState("light");

  const [loginData, setLoginData] = useState(null);

  const Login = (username) => {
    setLoginData({ name: username });
  };

  const Logout = () => {
    setLoginData(null);
  };

  const LightTheme = () => {
    setThemode("light");
  };

  const darkTheme = () => {
    setThemode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      value={{
        themeMode,
        darkTheme,
        LightTheme,
        loginData,
        Login,
        Logout,
      }}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

      {/* Task 2:
• Use the Context API to create a global user authentication system. If the user is
logged in, display a welcome message; otherwise, prompt them to log in. */}

      {/* Task-2 */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {loginData ? (
          <>
            <h2>Welcome, {loginData.name}</h2>
            <button className="btn-logintwo" onClick={Logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Please log in</h2>
            <button className="btn-login" onClick={() => Login("Dhaval")}>
              Login
            </button>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
