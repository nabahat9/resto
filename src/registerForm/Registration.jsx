import { FaArrowLeft, FaXmark, FaPhone } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import "../registerForm/registration.css";

// register form function
const RegisterForm = ({ setShowForm }) => {
  //show pages
  const [currentPage, setCurrentPage] = useState(1);
  const [Objectquantity, setObjectQuantity] = useState({
    quantity1: "",
    quantity2: "",
    quantity3: "",
    quantity4: "",
  });
  const [inputDisabled, setInputDisabled] = useState(false);
  const handleInputChange = (event) => {
    setObjectQuantity({
      ...Objectquantity,
      [event.target.name]: event.target.value,
    });

    if (event.target.value.length >= 2) {
      setObjectQuantity({
        ...Objectquantity,
        [event.target.name]: event.target.value[0],
      });
    }
  };
  //signUp code
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, phoneNumber, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred while registering.");
    }
  };
  //login code
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        console.log("Login successful");
      } else {
        setFormData({ ...formData, error: data.message });
      }
    } catch (error) {
      setFormData({
        ...formData,
        error: "An error occurred while logging in.",
      });
    }
  };
  return (
    <>
      {currentPage === 1 && (
        <div className="form-container">
          <div className="login-content">
            <form className="login-form flex">
              <h1>Se connecter</h1>
              <div className="inputs-container flex">
                <div className="input-container">
                  <FiUser className="input-icon" />
                  <input
                    type="text"
                    name="username"
                    className="login-input"
                    placeholder="Nom d'utilisateur"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-container">
                  <MdLockOutline className="input-icon" />
                  <input
                    type="text"
                    name="password"
                    className="login-input"
                    placeholder="Mot de pass"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <p onClick={() => setCurrentPage(3)}>Mot de passe oublié ? </p>
              </div>
              <button className="btn-connect">Se connecter</button>
            </form>
            <div className="empty"></div>
            <div className="welcome  adds flex">
              <FaXmark className="icon2" onClick={() => setShowForm(false)} />
              <h1>Bonjour!</h1>
              <p>
                Si vous n'avez pas de compte, inscrivez-vous pour bénéficier de
                promotions et de nombreuses opportunités
              </p>
              <button
                type="submit"
                className="btn-connect"
                onClick={() => setCurrentPage(2)}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 2 && (
        <div className="form-container">
          <form className="signUp-content" onSubmit={handleRegister}>
            <div className="form-icons">
              <FaArrowLeft
                className="icon1"
                onClick={() => setCurrentPage(1)}
              />
              <FaXmark className="icon2" onClick={() => setShowForm(false)} />
            </div>
            <div className="dialogForm flex">
              <h1>S'inscrire</h1>
              <div className="input-container">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nom de l'utilisateur"
                  required
                />
              </div>
              <div className="input-container">
                <MdOutlineEmail className="input-icon" />
                <input
                  type="email"
                  className="input-field"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your Email !"
                  required
                />
              </div>
              <div className="input-container">
                <MdLockOutline className="input-icon" />
                <input
                  type="password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de pass"
                  required
                />
              </div>
              <div className="input-container">
                <MdLockOutline className="input-icon" />
                <input
                  type="password"
                  className="input-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme le mot de pass"
                  required
                />
              </div>
              {error === "Passwords do not match" && (
                <p className="match">{error}</p>
              )}
              <div className="user-data">
                <button type="submit" className="btn-connect">
                  S'inscrire
                </button>
                <p className="connection-remark">
                  Si vous avez déja un compte,<span onClick={() => setCurrentPage(1)}>Connectez vous.</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
      {currentPage === 3 && (
        <div className="form-container">
          <div className="forgot-password">
            <div className="form-icons">
              <FaArrowLeft
                className="icon1"
                onClick={() => setCurrentPage(2)}
              />
              <FaXmark
                className="icon2"
                onClick={() => {
                  setShowForm(false);
                }}
              />
            </div>
            <div className="forgot-password-info flex">
              <div className="forgot-password-info-content flex">
                <h1>Mot de pass oublié</h1>
                <p>
                  Ne t'inquiète pas ! Cela arrive.Veuillez entrer votre numéro
                  de téléphone lié à votre compte
                </p>
                <div className="input-container">
                  <MdOutlineEmail className="input-icon" />
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Enter you Email!"
                    required
                  />
                </div>
              </div>
              <button
                className="btn-connect"
                onClick={() => {
                  setCurrentPage(5);
                }}
              >
                Envoyer le code
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 4 && (
        <div className="form-container">
          <div className="welcome flex">
            <h1>Bonjour!</h1>
            <p>
              Nous avons appelé le serveur pour vous. Veuillez patienter un
              instant.
            </p>
          </div>
        </div>
      )}
      {currentPage === 5 && (
        <div className="form-container">
          <div className="forgot-password">
            <div className="form-icons">
              <FaArrowLeft
                className="icon1"
                onClick={() => setCurrentPage(2)}
              />
              <FaXmark
                className="icon2"
                onClick={() => {
                  setShowForm(false);
                }}
              />
            </div>
            <div className="forgot-password-info flex">
              <div className="forgot-password-info-content verification flex">
                <h1>Vérification OTP</h1>
                <p>
                  Veuillez entrer le code de vérification que nous venons
                  d'envoyer à votre numéro de téléphone.
                </p>
                <div className="input-container">
                  <input
                    name="quantity1"
                    value={Objectquantity.quantity1}
                    style={{
                      border:
                        Objectquantity.quantity1 != ""
                          ? "2px solid #ffb02c"
                          : "none ",
                    }}
                    onChange={handleInputChange}
                    type="number"
                    className="input-field"
                    required
                  />
                  <input
                    name="quantity2"
                    type="number"
                    style={{
                      border:
                        Objectquantity.quantity2 != ""
                          ? "2px solid #ffb02c"
                          : "none ",
                    }}
                    className="input-field"
                    onChange={handleInputChange}
                    value={Objectquantity.quantity2}
                    required
                  />
                  <input
                    style={{
                      border:
                        Objectquantity.quantity3 != ""
                          ? "2px solid #ffb02c"
                          : "none ",
                    }}
                    name="quantity3"
                    type="number"
                    className="input-field"
                    onChange={handleInputChange}
                    value={Objectquantity.quantity3}
                    required
                  />
                  <input
                    name="quantity4"
                    style={{
                      border:
                        Objectquantity.quantity4 != ""
                          ? "2px solid #ffb02c"
                          : "none ",
                    }}
                    type="number"
                    value={Objectquantity.quantity4}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              <button
                className="btn-connect"
                onClick={() => {
                  setCurrentPage(6);
                }}
              >
                Vérifier
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 6 && (
        <div className="form-container">
          <div className="forgot-password">
            <div className="form-icons">
              <FaArrowLeft
                className="icon1"
                onClick={() => setCurrentPage(2)}
              />
              <FaXmark className="icon2" onClick={() => setShowForm(false)} />
            </div>
            <div className="forgot-password-info flex">
              <div
                className="forgot-password-info-content
                                creation flex"
              >
                <h1>Créer un nouveau mot de pass</h1>
                <p>Votre mot de passe doit être différent du précédent.</p>
                <div className="input-container">
                  <MdLockOutline className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Mot de pass"
                    required
                  />
                </div>
                <div className="input-container">
                  <MdLockOutline className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Confirmer le mot de pass"
                    required
                  />
                </div>
              </div>
              <button
                className="btn-connect"
                onClick={() => {
                  setCurrentPage(7);
                }}
              >
                Réinitialiser le mot de passe
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 7 && (
        <div className="form-container">
          <div className="forgot-password">
            <div className="form-icons">
              <FaArrowLeft
                className="icon1"
                onClick={() => setCurrentPage(2)}
              />
              <FaXmark className="icon2" onClick={() => setShowForm(false)} />
            </div>
            <div className="forgot-password-info flex">
              <div
                className="forgot-password-info-content
                                creation flex"
              >
                <h1>Mot de passe changé</h1>
                <p>Votre mot de passe a été modifié avec succès.</p>
                <div className="icon-container flex">
                  <IoCheckmarkDoneSharp />
                </div>
                <button
                  className="btn-connect"
                  onClick={() => {
                    setCurrentPage(1);
                  }}
                >
                  Retour à connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default RegisterForm;
