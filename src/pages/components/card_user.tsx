import avatar from "../img/User-avatar.svg.png";
import AuthContext from "./authContext";
import { useContext } from "react";

const CardUser = () => {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="form-title text-center">Bienvenido Usuario</h2>
            <div className="card card-user">
              <div className="card-text">
                <h1>{dataUser.email}</h1>
                <p>{dataUser.date}</p>
              </div>
              <div className="card-photo">
                <img src={avatar} alt="" />
              </div>
            </div>
            <div className="text-center mt-20">
              <button className="btn btn-primary" onClick={handleLogout}>
                Cerrar Sesion
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default CardUser;
