import React from 'react'
import UitoDesing from './Pages/UitoDesign.jsx'

const App = () => {
  return (
    <main>
      <UitoDesing />
      
      {
        alert("NOTE: This is a UI-based website optimized for viewing on devices with a min screen width of 1440px. ")
      }
    </main>
  )
}

export default App