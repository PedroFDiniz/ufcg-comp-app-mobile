import { useState } from 'react';
import { View, ActivityIndicator, Image } from "react-native"
import * as WebBrowser from 'expo-web-browser';

// CONTEXT
import { useAuth } from "../../context/AuthContext";

// SERVICES
import { authStudent } from '../../services/AuthService';

// STYLES
import styles from "./styles.login";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const { handleAuthSuccess, handleAuthFailure } = useAuth();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthUser = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await authStudent(username, password);
      const authentication = response.status;
      const userData = { name: response.body[0]?.name, email: response.body[0]?.email }
      handleAuthSuccess(authentication, userData);
    } catch (error) {
      console.error(error);
      handleAuthFailure();
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/retangular-name.png')} style={styles.mainImage}/>
      {isLoading ?
        <ActivityIndicator size="large" color="#004A8F" /> :
        <View style={styles.loginContainer}>
          <View styles={styles.usernameView}>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput style={styles.input} placeholder='Digite seu email CCC' value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
          </View>
          <View styles={styles.passwordView}>
            <Text style={styles.inputHeader}>Senha</Text>
            <TextInput style={styles.input} placeholder='Digite sua senha' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none' />
          </View>
          <View styles={styles.buttonView}>
            <Pressable style={styles.loginButton} onPress={handleAuthUser}>
              <Text styles={styles.loginButtonText}>Login</Text>
            </Pressable>
          </View>
        </View>
        // <Button
        //   disabled={!request}
        //   title={"Fazer login com o Google"}
        //   onPress={() => promptAsync({
        //     useProxy: false, //Set to false in production
        //     showInRecents: true
        //   })}
        // />
      }
    </View>
  )
}

export default LoginScreen;