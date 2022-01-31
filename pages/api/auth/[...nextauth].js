// next-auth
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Provider
import { providers } from "../../../providers"

const coreBackend = providers.coreBackend

const options = {
    providers: [
        CredentialsProvider({
            id: "BACKEND_DATA_STEREO",
            name: "BACKEND DATA STEREO",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            authorize: (credentials) => new Promise((resolve) => {
                /**
                 * La funcion asincorona debe retornar un objeto con los datos del token, si el token no es valido
                 * debe retornar null o false 
                 * 
                 * 
                 * TODO: llamar a la api y refrescar o validar el token enviado por un microfroend de login
                 */
                coreBackend.login({ username: credentials.username, password: credentials.password })
                    .then(
                        response => {
                            resolve({ jwtAccess: response.jwt })
                        }
                    ).catch(
                        error => {
                            resolve(null)
                        }
                    )
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
        async jwt({ token, user, account, profile, isNewUser }) {

            // console.log(token)
            // console.log(user)
            // console.log(account)
            // console.log(profile)
            // console.log(isNewUser)


            return token
        },
        /**
         * @param  {object} session      Session object
         * @param  {object} token        User object    (if using database sessions)
         *                               JSON Web Token (if not using database sessions)
         * @return {object}              Session that will be returned to the client 
         */
        async session({ session, user, token }) {
            // Add property to session, like an access_token from a provider.
            // console.log(session)
            // console.log(user)
            // console.log(token)
            return session
        }
    }
}

export default (req, res) => NextAuth(req, res, options)
