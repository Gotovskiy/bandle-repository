import "./styles/index.scss";

import { AppRouter } from "./providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Navbar } from "widgets/navbar/ui/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={() => toggleTheme()}>Change color</button>
    </div>
  );
};

export default App;
