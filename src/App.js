//引入scss基本設定
import "./base.scss";
import "./reset.scss";

import Main from "./components/Main/Main.jsx";
import RegisterSection from "./components/Main/RegisterSection/RegisterSection.jsx";
import ProgressControl from "./components/Main/ProgressControl/ProgressControl.jsx";
import Cart from "./components/Main/Cart/Cart.jsx";
//引入useState
import { useState } from "react";

function App() {
  const [stepPhase, setStepPhase] = useState(1)
  function handleClickNext () {
    if (stepPhase < 3 ) {
      setStepPhase(stepPhase + 1)
    }
  }
  function handleClickPrevious () {
    if (stepPhase > 1) {
      setStepPhase(stepPhase - 1)
    }
  }
  return (
    <div className="App">
      <Main>
          <RegisterSection />
          <Cart />
          <ProgressControl handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious} stepPhase={stepPhase}/>
      </Main>
    </div>
  );
}
export default App;
