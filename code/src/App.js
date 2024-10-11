import { SplitScreen } from "./components/SplitScreen";

const LeftComponent = () => {
  return <h2 style={{backgroundColor: 'crimson'}}>I am Left</h2>
}

const RightComponent = () => {
  return <h2 style={{backgroundColor: 'burlywood'}}>I am Right</h2>
}

function App() {
  return <SplitScreen Left={LeftComponent} Right={RightComponent} />;
}

export default App;
