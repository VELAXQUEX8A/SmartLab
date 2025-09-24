import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen h-full bg-gradient-to-br from-green-200 to-white">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}


export default App;
