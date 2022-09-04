/**
 * 201 - Create success
 * 200 - Mean success
 * 204 - Success but no content send response
 * * ---------------------------
 * ---------------------------
 * 4XX - Client error******
 * 400 - Bad request
 * 404 - Page not found
 * ---------------------------
 * ---------------------------
 * 5xx - Server error******
 * 500 - Internal server error
 * 
 * 3/9/2022
 * - Encounter cant connect to db when deploy to herokuapp server,
 * found it was the IP whitelisting issues, this need to allow all origin access from network access, mongoDB
 * - mongodb schema when creating collection will automatically add "S" at the end of the name of collection
 * - Form data need to import a new package call "multer"
 * 
 * 4/9/2022
 * - introducing jwt 
 * JWT (JSON Web token) is a securely transmitting data over network
 * encoded  based64
 * divided by three part -> header(type of jwt, 256? ), payload(user data), signature(private key)
 * we use dependency call [jsonwebtoken]
 * Creating JWT authenication helper for creating and verifying token
 * - The order for importing library should be aware. Example: module export lst before the func initialized
 */