import express from 'express';
const router = express.Router();


import { 
   calcular
} from '../controller/index.js';


router
    .route('/calcular/:result') // Recibir parametros
    .get(calcular)



export default router;