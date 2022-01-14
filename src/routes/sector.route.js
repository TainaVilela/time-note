import express from 'express'
import SectorController from '../controllers/sector.controller.js'

const route = express.Router()

route.post('/', SectorController.createSector)
route.put('/', SectorController.updateSector)
route.get('/', SectorController.getSectors)
route.get('/:sector_id', SectorController.getSector)

export default route