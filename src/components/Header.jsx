import Switch from 'react-switch'
import {useThemeContext} from '../context/themeContext'
import { useState } from 'react'
import '../styles/header.css'

export const Header = () => {
    const {contextTheme, setContextTheme, themeColors} = useThemeContext()
    const [checked, setChecked] = useState(false)

    const handleSwitch = (nextChecked) => {
      setContextTheme((state) => state === 'light' ? 'dark' : 'light')
      setChecked(nextChecked)
    }
    console.log(themeColors)
    return (
        <header className="header" id={contextTheme === 'light' ? themeColors.light2 : themeColors.dark2}  >
            <h1 className="title-header">Where in the world?</h1>
            <label htmlFor="sun-moon-switch" className='switch-mode'>
                <Switch
                    checked={checked}
                    onChange={handleSwitch}
                    handleDiameter={28}
                    offColor="#2B3743"
                    onColor="#FFFFFF"
                    offHandleColor="#FFFFFF"
                    onHandleColor="#2B3743"
                    height={40}
                    width={70}
                    borderRadius={20}
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20,
                                color: "#000",
                                paddingRight: 0
                            }}
                        >
                            🌜
                        </div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20,
                                color: "#f3f3f3",
                                paddingLeft: 0
                            }}
                        >
                            ☀️
                        </div>
                    }
                    uncheckedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20
                            }}
                        >
                            ☀️
                        </div>
                    }
                    checkedHandleIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 20,
                            }}
                        >
                            🌜
                        </div>
                    }
                    className="react-switch"
                    id="sun-moon-switch"
                />
            </label>
        </header>
    )
}
