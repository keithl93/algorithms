import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "Keith";
  const list = ["dog", "cat", "lion"];
  return (
    <>
      <h1 className="orange">{`Hello my name is {name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
