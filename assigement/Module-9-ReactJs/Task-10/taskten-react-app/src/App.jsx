import "./App.css";
import Usestatecount from "./Task-1/Usestatecount";
import UseEffectFetch from "./Task-2/UseEffectFetch";

import { Provider } from "react-redux";
import UsedisuseSele from "./Task-3/UsedisuseSele";
import Store from "./Task-3";
import UseRefrendring from "./Task-4/UseRefrendring";

function App() {
  return (
    <>
      {/* <Usestatecount />
      <UseEffectFetch />
      <Provider store={Store}>
        <UsedisuseSele />
      </Provider> */}
      <UseRefrendring />
    </>
  );
}

export default App;
