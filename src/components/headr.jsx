import { useContext } from "react";
import { ThemeContext } from "../cantext";

function Headr() {

    const { t, toggleTheme,  lang, setLang } = useContext(ThemeContext);
    
    
    return <div className={` w-full h-[100px] flex justify-between items-center px-10 border-b
    ${t === "light" ? "bg-white text-black" : "bg-zinc-900 text-white"}`}>

        <h1 className="text-[22px]">
        {lang === "uzb" ? "Salom, xush kelibsiz!" : "Hello, welcome!"}
        </h1>
        
        <div className="flex gap-[15px]">     
            <select id="city"
                className={ t === "light"?"bg-[#000] text-white border px-5  rounded":"bg-gray-300 text-[#000] border px-5  rounded"}
                value={lang} onChange={(e) => setLang(e.target.value)}
            >
                <option value="uzb">UZB</option>
                <option value="eng">ENG</option>
            </select>

          <div>
            <button className={t==="light"?"px-10 py-2 border cursor-pointer bg-[#000] text-white rounded":"px-10 py-2 border cursor-pointer rounded bg-gray-300 text-[#000]"}
                 onClick={toggleTheme}
            >
                
             {t === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}

            </button>
        </div>
       </div>

    </div>
        
       
    
      

}

export default Headr;