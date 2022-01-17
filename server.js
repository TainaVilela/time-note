import app from './app.js'
import db from './src/connectionDb/db.ConnectionDb.js'
import sequelize from "./src/connectionDb/db.ConnectionDb.js";

// port server express
const PORT = 3001


// run server express and mysql with sequelize

    app.listen(PORT, () => console.log(`ATHENTICATION AT PORT ${PORT}`))

