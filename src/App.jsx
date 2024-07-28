import "./App.css";
import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalContext.Provider>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
