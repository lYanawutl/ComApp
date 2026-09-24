import * as SecureStore from 'expo-secure-store'

const KEY = 'register_demo.session'

export async function saveSession(userId) {
    await SecureStore.setItemAsync(KEY, String(userId))
}

export async function loadSession() {
    const value = await SecureStore.getItemAsync(KEY)
    return value != null ? Number(value) : null
}

export async function clearSession() {
    await SecureStore.deleteItemAsync(KEY)
}