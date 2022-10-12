import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUsers, setDataUsers] = useState<any[]>([]);
  const { handleAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  const getUsers = () => {
    axios
      .get("data/users.json")
      .then((response) => {
        setDataUsers(response.data.data);
      })
      .catch(() => {
        alert("Error en redireccionar los usuarios");
      });
  };

  const validateUser = (data: any) => {
    let check_user = 0;
    const hashedPassword = bcrypt.hashSync(
      data.password,
      "$2a$10$CwTycUXWue0Thq9StjUM0u"
    );

    if (dataUsers.length !== 0) {
      dataUsers.map((user) => {
        if (user.email === data.email && user.password === data.password) {
          check_user = 1;
        }
      });

      if (check_user === 1) {
        alert("Inicio de Sesion Correcto");
        handleAuth({
          email: data.email,
          password: hashedPassword,
          date: data.date,
        });
        navigate("/usuario");
      } else {
        alert("Usuario Incorrecto");
      }
    }
  };

  const onSubmitLogin = (e: any) => {
    const data = {
      email: email,
      password: password,
      date: new Date().toLocaleString(),
    };
    validateUser(data);
    e.preventDefault();
  };

  const onChangeEmail = (value: any) => {
    setEmail(value.target.value);
  };

  const onChangePassword = (value: any) => {
    setPassword(value.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mt-20">
              <h2 className="form-title text-center">Bienvenido </h2>
              <form onSubmit={onSubmitLogin}>
                <div className="form-group ml-20">
                  <label htmlFor="">Correo </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={onChangeEmail}
                    placeholder="ejemplo@hotmail.com"
                  />
                </div>

                <div className="form-group ml-20">
                  <label htmlFor="">Contraseña </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={onChangePassword}
                  />
                </div>
                <div className="form-group ml-20">
                  <button className="btn btn-primary" type="submit">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginView;
