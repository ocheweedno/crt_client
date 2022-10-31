import { useEffect } from "react";
import "./App.css";
/* import Button from "./components/Button/Button";
import Header from "./components/Header/Header"; */
import { useTelegram } from "./hooks/useTelegram";
import { ReactComponent as LogoRzn } from "./logo-rzn.svg";
import { ReactComponent as LogoSqe } from "./logo-sqe.svg";

function App() {
  const { /* onToggleButton, */ tg } = useTelegram();

  useEffect(() => {
    tg.ready();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const onClose = () => {
    tg.close();
  }; */

  tg.MainButton.text = "Закрыть";
  tg.MainButton.show();
  tg.MainButton.onClick(() => tg.close());

  return (
    <div className="App">
      <div className="wrapper">
        <div style={{ marginTop: "100px", marginBottom: "20px" }}>
          <LogoRzn />
        </div>
        <div className="icon-way" style={{ marginBottom: "20px" }}>
          <div className="title">Выгодный путь</div>
          <LogoSqe />
        </div>
        <div>
          <h1 style={{ color: "white", fontSize: "36px" }}>Карта гостя</h1>
        </div>
        <div>Сергей</div>
      </div>
    </div>
  );
}

export default App;
