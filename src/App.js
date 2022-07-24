import React, { useReducer } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { authInitState, authReducer} from "./auth/authReducer";
import { AuthContext } from "./auth/AuthContext";


function App() {
  // <Login />

  const [authState, dispatch] = useReducer(authReducer, authInitState);
  
  return (
  <>
  <AuthContext.Provider
    value={{authState, dispatch,}}>
      <AppRoutes />
  </AuthContext.Provider>
  </>
  )

}

export default App;
