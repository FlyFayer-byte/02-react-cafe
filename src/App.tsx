// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import appCss from "./App.module.css"
import cafeInfoCss from "./components/CafeInfo/CafeInfo.module.css"

export default function App() {
  return (
    <div className={appCss.app}>
      <div className={cafeInfoCss.container}>
        <h1 className={cafeInfoCss.title}>Sip Happens Café</h1>
        <p className={cafeInfoCss.description}>
          Please rate our service by selecting one of the options below.
        </p>
      </div>
    </div>
  )
}
