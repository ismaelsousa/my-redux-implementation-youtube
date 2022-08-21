import React from "react";
import { Button, Text, View } from "react-native";
import useDispatch from "../../redux/Hooks/useDispatch";
import useSelector from "../../redux/Hooks/useSelector";
import { AuthState } from "../../store/modules/auth";
import { login, logout } from "../../store/modules/auth/actions";

const Account: React.FC = () => {
  const dispatch = useDispatch();
  const auth: AuthState = useSelector((state) => state.auth);

  console.log("Render: ACCOUNT");
  const handleAuth = () => {
    if (!auth.isLoggedIn) {
      dispatch(
        login({
          name: "Ismael",
          email: "ismael@gmail.com",
        })
      );
    } else {
      dispatch(logout());
    }
  };

  return (
    <View>
      <Text>Usuário: {auth.name}</Text>
      <Button onPress={handleAuth} title={auth.isLoggedIn ? "Logout" : "Login"} />
    </View>
  );
};

export default Account;
