import StepProgress from "./components/StepProgress.jsx";
import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";
import ProgressControl from "./components/ProgressControl.jsx"
import "./App.css"

function App() {
  return (
    <div>
      <main>
        <div>
        <StepProgress />
        <section>
          <Step1 />
          <Step2 />
          <Step3 />
        </section>
        <section>
          <ProgressControl />
        </section>
        </div>
      </main>
    </div>
  );
}
export default App;
