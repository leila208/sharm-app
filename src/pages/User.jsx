import React from "react";
function User() {
  return (
    <section className="user">
      <div className="login">
        <div className="login-img">
          <img src="https://images.unsplash.com/photo-1598121496628-9d8b7578e290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        </div>
        <div className="login-form">
          <form>
            <legend>
              <h1>Qeydiyyat formu</h1>
            </legend>
            <div className="inputs">
              <input
                type="text"
                placeholder="Ad"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^a-z]/gi, "");
                }}
              />
              <input
                type="text"
                placeholder="Soyad"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^a-z]/gi, "");
                }}
              />
              <input type="email" required placeholder="Email" />
              <input id="pass" type="password" placeholder="Şifrə" />
              <div className="label">
                <input type="checkbox" id="ch" />
                <label htmlFor="ch">Bu hesabı yadda saxla</label>
              </div>
              <input id="orangered" type="submit" value="Hesab yaradın" />
              və ya
              <a href="#" id="blue">
                <i className="fa-brands fa-facebook-f" />
                Facebook ilə daxil olun
              </a>
              <a href="#" id="red">
                <i className="fa-brands fa-google"/>
                Google ilə daxil olun
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default User;
