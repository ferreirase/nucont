import { Router } from 'express';
import balanceRoutes from './balance.routes';

const routes = Router();

routes.use('/balance', balanceRoutes);

export default routes;
