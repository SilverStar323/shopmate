import { SpeedInsights } from "@vercel/speed-insights/react"

import { AllRoutes } from "./Routes/AllRoutes";
import { Header } from "./components";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <SpeedInsights />
    </div>
  );
}

export default App;
