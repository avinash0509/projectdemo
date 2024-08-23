import "./App.css";
import QuizWindow from "./component/QuizWindow";
import ResultWindow from "./component/ResultWindow";
import Welcome from "./component/Welcome";
function App() {
  return (
    <>
      <Welcome />
      <QuizWindow />
      <ResultWindow />
    </>
  );
}

export default App;
