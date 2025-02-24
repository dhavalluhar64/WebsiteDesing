import UserCard from "./Task-1/UserCard";
import Counter from "./Task-2/Counter";

function App() {
  return (
    <>
      <h1>Hello this is the props</h1>

      <UserCard name={"Dhaval"} age={21} location={"AMD"} />

      <Counter />
    </>
  );
}

export default App;
