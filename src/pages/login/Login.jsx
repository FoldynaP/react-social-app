import "./Login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AntiSocial</h3>
                <span className="loginDescription">Buďte s vašimi přáteli stále na blízku!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Heslo" type="Password" className="loginInput" />
                    <button className="loginBtn Btn">Přihlásit</button>
                    <span className="loginForgot">Zapomněli jste heslo?</span>
                    <button className="registerBtn Btn">Zaregistrovat</button>
                </div>
            </div>
        </div>
    </div>
  )
}
