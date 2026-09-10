import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  
  content: {
  padding: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    elevation: 4,
  },

  cardTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 8,
  },

  cardText: {
    color: "#777",
    lineHeight: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginTop: -5,
    marginBottom: 20,
  },

  forgotText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },

  errorText: {
    color: "#DC2626",
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: -2,
    lineHeight: 18,
  },

  loginButton: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerButton: {
    height: 52,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  registerText: {
    color: "#777777",
    fontSize: 14,
  },

  registerLink: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  loginText: {
    color: "#777777",
    fontSize: 14,
  },

  loginLink: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default styles;