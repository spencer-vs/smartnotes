// // import { createContext, useState, useEffect } from.catch((error) => {
// //   console.error("Auth fetch failed:", error.response?.data || error.message);
// //   localStorage.clear();
// //   setAuth({ isAuthenticated: false, user: null });
// // });
// import { createContext, useState, useEffect } from "react";
// import api from "../api/axios";
// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({
//     isAuthenticated: false,
//     user: null,
//   });
//   useEffect(() => {
//     const token = localStorage.getItem("access");
//     if (!token) return;
//     api.get("auth/user/")
//       .then(res => {
//         setAuth({ isAuthenticated: true, user: res.data });
//       })
//       .catch(() => {
//         localStorage.clear();
//         setAuth({ isAuthenticated: false, user: null });
//       });
//   }, []);
//   const login = async (tokens) => {
//     localStorage.setItem("access", tokens.access);
//     localStorage.setItem("refresh", tokens.refresh);
//     const res = await api.get("auth/user/");
//     setAuth({ isAuthenticated: true, user: res.data });
//   };
//   const logout = () => {
//     localStorage.clear();
//     setAuth({ isAuthenticated: false, user: null });
//   };
//   return (
//     <AuthContext.Provider value={{ auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };










import { createContext, useState, useEffect } from "react";
import api from "../api/axios";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    access: null,
    refresh: null,
    user: null,
    isAuthenticated: false,
    loading: true,
  });
  // 🔹 Load token on app start
  useEffect(() => {
    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");
    if (access && refresh) {
      api.defaults.headers.Authorization = `Bearer ${access}`;
      api.get("/auth/user/")
        .then(res => {
          setAuth({
            access,
            refresh,
            user: res.data,
            isAuthenticated: true,
            loading: false,
          });
        })
        .catch(() => logout());
    } else {
      setAuth(prev => ({ ...prev, loading: false }));
    }
  }, []);
  // 🔹 Login
  const login = async (data) => {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    api.defaults.headers.Authorization = `Bearer ${data.access}`;
    const res = await api.get("/auth/user/");
    setAuth({
      access: data.access,
      refresh: data.refresh,
      user: res.data,
      isAuthenticated: true,
      loading: false,
    });
  };
  // 🔹 Logout
  const logout = () => {
    localStorage.clear();
    delete api.defaults.headers.Authorization;
    setAuth({
      access: null,
      refresh: null,
      user: null,
      isAuthenticated: false,
      loading: false,
    });
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};