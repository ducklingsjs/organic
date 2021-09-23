import { Router } from 'express';
import { login } from '../../controllers/session/post';
import { loginBodyValidator } from '../../middlewares/validators/session';

// import { login, register, changePassword } from 'controllers/auth';
// import { checkJwt } from 'middleware/checkJwt';
// import {
//   validatorLogin,
//   validatorRegister,
//   validatorChangePassword,
// } from 'middleware/validation/auth';

const router = Router();

// router.post('/login', [validatorLogin], login);
// router.post('/register', [validatorRegister], register);
// router.post('/change-password', [checkJwt, validatorChangePassword], changePassword);

router.post('/', [loginBodyValidator], login);

router.get('/', (req, res) => {
  console.log(req.session);
  return res.send('Session');
});

export default router;
