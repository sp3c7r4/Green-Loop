import useAuthStore from "@/auth/authStore";
import { Text, View } from "react-native";

const TestAuthStore = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login)
  const user = useAuthStore((state) => state.user);

  return (
    <View>
      {/* {
        login('Sarafasatar@gmail.com', "spectra", "gee")
      } */}
      <Text>Authenticated: {isAuthenticated ? "Yes" : "No"}</Text>
      <Text>User: {user ? JSON.stringify(user) : "No user logged in"}</Text>
    </View>
  );
};

export default TestAuthStore;