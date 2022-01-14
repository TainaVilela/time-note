import express from 'express'

// routes
import ClientRoute from './src/routes/client.route.js'
import StatusDiRoute from './src/routes/statusDi.route.js'
import SectorRoute from './src/routes/sector.route.js'
import TypeDiRoute from './src/routes/typeDi.route.js'
import DiRoute from './src/routes/di.route.js'
import TypeReason from './src/routes/typeReason.route.js'
import CodeReasonRoute from './src/routes/codeReason.route.js'
import DescriptionReasonRoute from './src/routes/descriptionReason.route.js'
import PlaceWorkRoute from './src/routes/placeWork.route.js'
import OperationRoute from './src/routes/operation.route.js'
import ExpedientRoute from './src/routes/expedient.route.js'
import ProjectNoteRoute from './src/routes/projectNote.route.js'

const app = express()

// port connection server express
const PORT = 3001

// json
app.use(express.json())

// routes
app.use('/client', ClientRoute)
app.use('/statusDi', StatusDiRoute)
app.use('/sector', SectorRoute)
app.use('/typeDi', TypeDiRoute)
app.use('/di', DiRoute)
app.use('/typeReason', TypeReason)
app.use('/codeReason', CodeReasonRoute)
app.use('/descriptionReason', DescriptionReasonRoute)
app.use('/placeWork', PlaceWorkRoute)
app.use('/operation', OperationRoute)
app.use('/expedient', ExpedientRoute)
app.use('/projectNote', ProjectNoteRoute)

export default app