import { useContext, useState } from "react";
import Headr from "./components/headr";
import Section from "./components/section";
import { ThemeContext } from "./cantext";

function App() {

  const { t, } = useContext(ThemeContext);
  
  return <div>

    <Headr/>

    <main className={`flex-1 w-full h-screen px-20 py-20 ${t == "light" ? "bg-whitetext-black" : "bg-zinc-900 text-white"}`}>
      <Section/>
    </main>

  </div>
  

}

export default App;