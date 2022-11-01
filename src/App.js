import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { ReactComponent as LogoRzn } from "./logo-rzn.svg";
import { ReactComponent as LogoSqe } from "./logo-sqe.svg";
import { useSearchParams } from "react-router-dom";

function App() {
  const { tg, user } = useTelegram();

  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  useEffect(() => {
    tg.ready();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h1
            style={{ color: "white", fontSize: "36px", marginBottom: "20px" }}
          >
            Карта гостя
          </h1>
        </div>
        <div style={{ color: "white", fontSize: "36px" }}>{name}</div>
        <div>{user}</div>
      </div>
    </div>
  );
}

export default App;
