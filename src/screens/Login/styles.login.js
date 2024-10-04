import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  inputHeader: {
    fontSize: 16
  },
  usernameView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    marginBottom: 5
  },
  passwordView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    marginBottom: 5
  },
  loginButtonView: {
    width: "100%",
    paddingHorizontal: 30
  },
  loginButton: {
    backgroundColor: '#2194F3',
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 20
  }
});

export default styles;