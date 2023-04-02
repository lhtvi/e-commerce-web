import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const Signup = () => {
  return (
   <>
   <Meta title='Compare Products' />
      <BreadCrumb title='Compare Products' />
      <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Create Account</h3>
              <form action='' className='d-flex flex-column gap-15'>
              <div>
                  <input type='text' name='first-name' placeholder='First name' className='form-control' />
                </div>
                <div>
                  <input type='text' name='last-name' placeholder='Last name' className='form-control' />
                </div>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control' />
                </div>
                <div className='mt-3'>
                  <input type='password' name='password' placeholder='Password' className='form-control' />
                </div>
                <div>
                  <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button className='button border-0'>Create</button>
                </div>
                </div>
                

              </form>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Signup
