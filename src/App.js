import { RouterProvider } from "react-router-dom";
import { router } from "./Layout/Routes/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
