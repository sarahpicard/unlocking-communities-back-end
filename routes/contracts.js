import { Router } from 'express'
import * as contractsCtrl from '../controllers/contracts.js'


const router = Router()


router.post('/', contractsCtrl.create)
router.get('/all', contractsCtrl.index)

export { router }