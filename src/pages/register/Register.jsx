import "./Register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AntiSocial</h3>
                <span className="loginDescription">Buďte s vašimi přáteli stále na blízku!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Jméno" type="text" className="loginInput" />
                    <input placeholder="Příjmení" type="text" className="loginInput" />
                    <input placeholder="Email" type="Email" className="loginInput" />
                    <input placeholder="Heslo" type="Password" className="loginInput" />
                    <input placeholder="Stejné Heslo znovu" type="Password" className="loginInput" />
                    <button className="loginBtn Btn">Vytvořit účet</button>
                    <span className="loginForgot">Zapomněli jste heslo?</span>
                    <button className="registerBtn Btn">Zpět na příhlášení</button>
                </div>
            </div>
        </div>
    </div>
  )
}
