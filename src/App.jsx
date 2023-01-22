import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
