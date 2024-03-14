import  express, { Router } from 'express';
const router = express.Router();
import getData from '../Controllers/getData.js';

router.get("/get",getData);

export default router;