import React from 'react'
import './auth.css'
import {Link} from 'react-router-dom'


export default function Login() {
  return (
    <div className='loginPage'>
     <h1>MarketMates</h1>
     <form>
     <input type='text' name='email' placeholder='Email or Phone'/>
     <input type='password' name='password' placeholder='Password'/>
     <button>Continue</button>
     </form>
     <div style={{marginTop:"10px",marginBottom:"10px"}}>
     <span style={{ fontSize:"11px"}}>Don't have an Account ?</span> &nbsp; <Link style={{textDecoration:"none"}} to='/signup'><span  style={{color:'#68b984'}}> Sign up</span></Link> 
     </div>
     <div class="hr-line">
      <span>OR</span>
    </div>
     <div className="log-via">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="google" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQyk1pZFNSSQZNv-O0ZjtsJ3f26uxfnXPiQ&usqp=CAU" alt="facebook" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLaYBnBHo2rQ1SGKudsWWpgOXzbLBagpG5fw&usqp=CAU" alt="instagram" />
     </div>
    
    </div>
  )
}
