import { useState } from 'react'
import companyLogo from '/logo-learnincreation.jpeg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://learnincreation.com" target="_blank">
          <img src={companyLogo} className="logo" alt="Learnincreation logo" />
        </a>
        <hr/>
      </div>
      <h1>Are You Ready for being a Geek ? </h1>
      <div className="card">
          <h3> Learn Computer Science In Effective and Interactive Methodology. </h3>
          <p> 
            Enroll or Get Informed about our <b>"imgeek"</b> Summer Learning Bootcamp Scholarship Program <br/>
            running under a flag of Learnincreation and FIED, IIM Kashipur in Learnincreation Study Center, Rudrapur, Uttarakhand 
          </p>
      </div>
      <p className="read-the-docs">
       Connect to our Whatsapp line for more details about Learnincreation Study Centre.
       <br/><br/>
       <hr/> <br/>
       Whatsapp : +91-6395677914 or you can mail directly to founder at "thevinaybhatt@gmail.com" 
      </p>
    </>
  )
}

export default App
