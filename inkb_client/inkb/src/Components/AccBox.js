import React from 'react'
import './AccBox.css'

function AccBox() {
  return (
<>
    <div className='overlay'>
`       <div className='AccContainer'>
        <div className='acc-element acc-element-left'>
        <a href='SignUp'>Create account</a>
        </div>
        <div className='acc-element acc-element-right'>
        <button>Log In</button>
        </div>
    </div>`
    </div>
    </>  
  )
}

export default AccBox