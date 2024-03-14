import  express, { Router } from 'express';
const router = express.Router();
import getData from '../Controllers/getData.js';
import studentController from '../Controllers/studentController.js';
import submitted from '../Controllers/editData.js'

router.get("/get",getData);
router.post("/edit",studentController);
router.post("/submit",submitted);

export default router;