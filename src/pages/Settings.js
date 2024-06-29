import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react"

export default function Settings(){
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(205,92,92)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757"
    })
    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    }, [settings])

    const [theme, setTheme] = useState("light")
        const themes = [
            {
                "--background-color": "#fff",
                "--background-light": "#fff",
                "--shadow-color": "rgba(0,0,0,0.2)",
                "--text-color": "#0A0A0A",
                "--text-light": "#575757"
            },
            {
                "--background-color": "rgb(29, 29, 29)",
                "--background-light": "rgb(77, 77, 77)",
                "--shadow-color": "rgba(0,0,0,0.2)",
                "--text-color": "#ffffff",
                "--text-light": "#eceaea",
            }
        ]
        function changeTheme(i){
            const _theme = {...themes[i]}
            setTheme(i === 0 ? "light" : "dark")
            let _settings = {...settings}
            for(let key in _theme){
                _settings[key] = _theme[key]
            }
            setSettings(_settings)
        }
        function changeColor(i){
            const _color = primaryColors[i]
            let _settings = {...settings}
            _settings["--primary-color"] = _color
            setPrimaryColor(i)
            setSettings(_settings) 
        }
    
    const primaryColors = [
        "rgb(205,92,92)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ]
    const[primaryColor, setPrimaryColor] = useState(0)
    return(
     <div>
        <div className="section d-block">
            <h2>Preferred theme</h2>
            <div className="options-container">
                <div className="option light" onClick={() => changeTheme(0)}>
                    
                    {theme === "light" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>

                    )}
                </div>
                <div className="option dark" onClick={() => changeTheme(1)}>
                    
                {theme === "dark" && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>

                    )}
                    
                </div>
            </div>
        </div><div className="section d-block">
            <h2>Primary color</h2>
            <div className="options-container">
               
                {primaryColors.map((color, index) =>(
                    <div className="option light" style={{backgroundColor : color}} onClick={() => changeColor(index)} >
                    
                    {primaryColor === index && (
                        <div className="check">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>

                    )}
                </div>
                ))}
            </div>
        </div>

     </div>
    )
 
 }