import { Router } from "express";

const router = Router()

router.use('/customize', require('./customize').default)
router.use('/feedback', require('./feedback').default)

export default router