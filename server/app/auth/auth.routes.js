import express from 'express';

import authCtrl from './auth.controller'

const router = express.Router()

router.route('/auth/signin')
  .post(authCtrl.signin)
  .get(authCtrl.requireSignin,authCtrl.checkSessionAndGetUser)


router.route('/auth/signout')
  .post(authCtrl.signout)

export default router