import "./App.css";
import { Greeting } from "./Components/Greeting";
import { Message } from "./Components/Message";
import { Button } from "./Components/Button";
function App({ greet }) {
  const ButtonClick = () => {
    alert("Кнопку натиснуто!");
  };
  return (
    <div className="App">
      <Greeting name={greet} />
      <Message text="Це - текст." />
      <Button onClick={ButtonClick} />
    </div>
  );
}

export default App;
