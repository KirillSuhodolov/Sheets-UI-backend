const {from} = require("rxjs")
const {google} = require("googleapis")

const client_id = ""
const client_secret = ""
const redirect_uris = [""]

module.exports = {
    getOAuth$: () => {
        const googleOAuthClient = new google.auth.OAuth2(

        )
    }
}