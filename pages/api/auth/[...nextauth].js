import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Credentials({
            name: "CUSTOM_BACKEND",
            credentials: {
                tokenAccess: { label: "tokenAccess", type: "text" },
                tokenType: { label: "tokenType", type: "text" }
            },
            authorize: (credentials) => new Promise((resolve) => {
                /**
                 * La funcion asincorona debe retornar un objeto con los datos del token, si el token no es valido
                 * debe retornar null o false 
                 * 
                 * 
                 * TODO: llamar a la api y refrescar o validar el token enviado por un microfroend de login
                 */
                const dataUser = {
                    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    refreshToken: "/api_refresh"
                }
                resolve(dataUser)
            })
        })
    ],
    /**
     * A random string used to hash tokens, sign cookies and generate crytographic keys.
     */
    secret: "RANDOM_STRING",
    /**
     * object and all properties
     */
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    jwt: {
        encryption: true,
        secret: "RANDOM_STRING"
    },
    callbacks: {
        /**
         * @param  {object}  token     Decrypted JSON Web Token
         * @param  {object}  user      User object      (only available on sign in)
         * @param  {object}  account   Provider account (only available on sign in)
         * @param  {object}  profile   Provider profile (only available on sign in)
         * @param  {boolean} isNewUser True if new user (only available on sign in)
         * @return {object}            JSON Web Token that will be saved
         */
        async jwt(token, user, account, profile, isNewUser) {
            // Add access_token to the token right after signin
            if (account?.accessToken) {
                token.accessToken = account.accessToken
            }

            if (typeof token === "object" && token !== null) {
                if (token.user) {
                    return token
                }
            }

            return { user, account, profile, isNewUser }
        },
        /**
         * @param  {object} session      Session object
         * @param  {object} token        User object    (if using database sessions)
         *                               JSON Web Token (if not using database sessions)
         * @return {object}              Session that will be returned to the client 
         */
        async session(session, token) {
            // Add property to session, like an access_token from a provider.
            return {
                ...session,
                ...token,
                user: token.user,
            }
        }
    }
}

export default (req, res) => NextAuth(req, res, options)
