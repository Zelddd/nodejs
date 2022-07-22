import passport from "passport";
import { Router } from "express";

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.post('/login', passport.authenticate('local'))

router.get('/logout', (req, res) => {
  req.logout(() => {})
  res.redirect('/')
})

export default router