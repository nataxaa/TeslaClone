import { Header } from "./components/header";
import { FifthPage } from "./Pages/FifthPage";
import { FirstPage } from "./Pages/FirstPage";
import { LastPage } from "./Pages/LastPage";
import { QuarterPage } from "./Pages/QuarterPage";
import { SecondPage } from "./Pages/SecondPage";
import { ThirdPage } from "./Pages/ThirdPage";


function App() {
  return (
    <div className="App">
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <QuarterPage/>
      <FifthPage/>
      <LastPage/>
    </div>
  );
}

export default App;
