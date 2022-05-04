import { Router } from 'express'
import * as inventoryCtrl from '../controllers/inventory.js'

const router = Router()

router.get('/', inventoryCtrl.index)
router.post('/', inventoryCtrl.create)
router.delete('/:id', inventoryCtrl.delete)

export { 
  router,
}