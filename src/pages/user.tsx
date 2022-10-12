import "./styles/grid.scss";
import "./styles/form.scss";
import "./styles/styles.scss";
import { AuthProvider } from "./components/authContext";
import CardUser from './components/card_user';

const UserView = () => {

  return (
    <>
      <AuthProvider>
        <CardUser/>
      </AuthProvider>
    </>
  );
};

export default UserView;
