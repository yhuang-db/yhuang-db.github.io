import React from 'react'
import ReactDOM from 'react-dom/client'

// Import our Bootstrap CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import custom CSS
import './index.css'

// Import components
import Header from './1-Header.jsx'
import Bio from './2-Bio.jsx'
import Links from './3-Links.jsx'
import More from './4-More.jsx'
import Footer from './8-Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div class="d-flex flex-column min-vh-100">
      <Header /> {/* Done */}
      <Bio />    {/* Done */}
      <Links />  {/* Done */}
      <More />   {/* Done */}
      <Footer /> {/* Done */}
    </div>
  </React.StrictMode>,
)
