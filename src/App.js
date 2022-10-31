import { useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";

function App() {
  const { /* onToggleButton, */ tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <Header />
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

export default App;
