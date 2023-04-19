import React from 'react'
import './css/Authentication.css'

export const Authentication = () => {
  return (
    <div className='auth-dialog'>
      <div className="login-box">
        <div className='d-flex justify-content-center image-container'>
          <img id="logo-img" src="logo.png" alt="logo" />
        </div>
        <div className="fw-bold text-secondary text-center mt-2 translate-head">A place to share knowledge and better understand the world</div>
        <div className="grid-container container">
          <div className="row">
            <div className="col-6">
              <p className='text-secondary small-text terms-text'>By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.</p>
              <div className='alt-login'>
                <button type="button" className="btn btn-outline-secondary mb-3 d-flex justify-content-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  <span className="ms-3 spantext">Continue with Google</span>
                </button>
                <button type="button" className="btn btn-outline-secondary d-flex justify-content-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <span className="ms-3 spantext">Continue with Facebook</span>
                </button>
              </div>
              <div className=' mt-2 text-center email-login'>
                <button type='button' className='btn small-text fw-bold text-secondary'>Sign up with email</button>
              </div>
            </div>
            <div className="col-6">
              <div className='login-area-header bold-text'>Login</div>
              <form className='mt-2'>
                <div className="mb-3">
                  <label for="inputEmail" className="form-label bold-text">Email</label>
                  <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="inputPassword" className="form-label bold-text">Password</label>
                  <input type="password" className="form-control" id="inputPassword" />
                </div>
                <div className="d-flex justify-content-between form-footer-buttons">
                    <div className='link-fgtPwd small-text text-secondary'>Forgot password?</div>
                    <div>
                      <button type="submit" className="btn btn-primary login-submit" disabled>Login</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
          <hr id="ruler"/>
          <div className='d-flex justify-content-center language-box'>
            <div className='text-primary'>
              <span className='small-text'>Espanol</span>
              <span className='text-secondary ms-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              </span>
            </div>
            <div className='text-primary ms-1'>
              <span className='small-text'>French</span>
              <span className='text-secondary ms-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
              </span>
            </div>
          </div>
        </div>
        <footer id="footer" className='d-flex justify-content-center'>
          <div>
            <span className='text-secondary'>About</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Careers</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Privacy</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Terms</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Contact</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Languages</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Your Ad Choices</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>Press</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            </span>
          </div>
          <div>
            <span className='text-secondary'>© Quora, Inc. {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
