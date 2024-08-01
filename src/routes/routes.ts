import express, { Router } from "express";
import { deleteStore, getIdStore, getParams, getStore, postStore, putStore } from "../controller/controller";

const router: Router = express.Router();

router.get('/', getStore);
router.get('/:id', getIdStore);
router.get('/:id/:email', getParams)
router.post('/', postStore);
router.put('/:id', putStore);
router.delete('/:id', deleteStore);

export {router};