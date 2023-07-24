import { useState } from 'react';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import RateChickens from "./pages/RateChickens";
import SubmitChicken from "./pages/SubmitChicken";
<<<<<<< HEAD
import ViewChickens from "./pages/ViewChickens";
=======
import ViewChickens from "./pages/ViewChicken";
>>>>>>> 0611820bf70782d6f876298f1574a5c776648e7b

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Routes>
      <Route path="/" element={<RateChickens />} />
      <Route path="/submit" element={<SubmitChicken />} />
      <Route path="/view" element={<ViewChickens />} />
    </Routes>
    </>
  )
}

export default App
