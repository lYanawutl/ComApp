import { createContext, useContext, useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";

import { loginStudent, getStudentById } from "../db/database";
import { saveSession, loadSession, clearSession } from "../utils/session";

const AuthContext = createContext(null)
const db = useSQLiteContext()
export function AuthProvider({children}){
    

    const [user, setUser] = useState(null)
    const [restoring, setRestoring] = useState
    
    useEffect(() => {
        async function restore() {
            const id = loadSession()
            if (id != null) {
                const found = await getStudentById(db,id)
                if (found) {
                    setUser(found)
                } else {await clearSession()}
            }
            setRestoring(false)
        }
        restore()
    },[db])

    async function login(username, password) {
    const result = await loginStudent(db, username, password)

    if (result.ok) {
        await saveSession(result.user.id)
        setUser(result.user)
    }
    return result
}
    async function logout() {
        await clearSession()
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user,restoring,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (ctx == null) {
        throw new Error('useAuth ต้องใช้ภายใน <AuthProvider> เท่านั้น')
    }
    return ctx
}
