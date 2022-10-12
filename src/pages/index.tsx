import LoginView from "./components/login";
import { AuthProvider } from "./components/authContext";

const IndexView = () => {
  return (
    <>
      <AuthProvider>
        <LoginView />
      </AuthProvider>
    </>
  );
};

export default IndexView;
