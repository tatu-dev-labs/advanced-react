import { SplitScreen } from "./components/SplitScreen";

const LeftComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftComponent title="Left" />
      <RightComponent title="Right" />
    </SplitScreen>
  );
}

export default App;
