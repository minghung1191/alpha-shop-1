//引入scss基本設定
import "./base.scss";
import "./reset.scss";

import Main from "./components/Main/Main.jsx";
import RegisterSection from "./components/Main/RegisterSection/RegisterSection.jsx";
import ProgressControl from "./components/Main/ProgressControl/ProgressControl.jsx";
import Cart from "./components/Main/Cart/cart.jsx";

function App() {
  return (
    <div className="App">
      <Main>
          <RegisterSection />
          <Cart />
          <ProgressControl />
      </Main>
    </div>
  );
}
export default App;
