import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import { ReactComponent as Logo } from "./logo-header.svg";

function App() {
  const { /* onToggleButton, */ tg } = useTelegram();

  useEffect(() => {
    tg.ready();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClose = () => {
    tg.close();
  };

  tg.MainButton.text = "Закрыть";
  tg.MainButton.show();
  tg.MainButton.onClick(() => tg.close());

  return (
    <div className="App">
      {/*  <Header />
      <Button onClick={onClose}>Close</Button> */}

      <div className="wrapper">
        <Logo style={{ fill: "white" }} />
        <h1>Сергей</h1>
      </div>
    </div>
  );
}

export default App;
