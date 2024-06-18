import React from 'react'

export default function LogIn() {
  return (
    <div class="container-fluid bg-image">
      <div class="row">
        <div class="login-wraper">
          <div class="hidden-xs">
            <img src="assets/images//login.jpg" alt="" />
          </div>
          <div class="banner-text hidden-xs">
            <div class="line"></div>
            <div class="b-text">
              Watch{" "}
              <span class="color-active">
                millions
                <br /> of
              </span>{" "}
              <span class="color-b1">v</span>
              <span class="color-b2">i</span>
              <span class="color-b3">de</span>
              <span class="color-active">os</span> for free.
            </div>
            <div class="overtext">Over 6000 videos uploaded Daily.</div>
          </div>
          <div class="login-window">
            <div class="l-head">Log Into Your Circle Account</div>
            <div class="l-form">
              <form action="http://azyrusthemes.com/circlevideo/login.html">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="sample@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="**********"
                  />
                </div>
                <div class="checkbox">
                  <label>
                    <label class="checkbox">
                      <input type="checkbox" name="#" />
                      <span class="arrow"></span>
                    </label>{" "}
                    <span>Remember me on this computer</span>
                    <span class="text2">
                      (not recomended on public or shared computers)
                    </span>
                  </label>
                </div>
                <div class="row">
                  <div class="col-lg-7">
                    <button type="submit" class="btn btn-cv1">
                      Login
                    </button>
                  </div>
                  <div class="hidden-xs">
                    <div class="col-lg-1 ortext">or</div>
                    <div class="col-lg-4 signuptext">
                      <a href="signup">Sign Up</a>
                    </div>
                  </div>
                </div>
                <div class="row hidden-xs">
                  <div class="col-lg-12 forgottext">
                    <a href="/path/to/page">Forgot Username or Password?</a>
                  </div>
                </div>
                <div class="row visible-xs">
                  <div class="col-xs-6">
                    <div class="forgottext">
                      <a href="/path/to/page">Forgot Password?</a>
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="signuptext text-right">
                      <a href="signup.html">Sign Up</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
