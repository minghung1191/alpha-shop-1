//引入scss基本設定
import "./base.scss";
import "./reset.scss";

import Main from "./components/Main/Main.jsx";
import RegisterSection from "./components/Main/RegisterSection/RegisterSection.jsx";
import ProgressControl from "./components/Main/ProgressControl/ProgressControl.jsx";

function App() {
  return (
    <div className="App">
      <Main>
          <RegisterSection />
          <ProgressControl />
      </Main>
    </div>
  );
}
export default App;
