import  express, { Router } from 'express';
const router = express.Router();
import getData from '../Controllers/getData.js';
import studentController from '../Controllers/studentController.js';

router.get("/get",getData);
router.post("/edit",studentController)

export default router;