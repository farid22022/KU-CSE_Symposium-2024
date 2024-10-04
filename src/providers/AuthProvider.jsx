import { createContext } from "react";

// Create the context outside the provider
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // Wrap children in the context provider, passing a default value (if no auth is needed, use null or {})
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
