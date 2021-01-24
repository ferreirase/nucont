import { Router } from 'express';
import { Import } from '../services/RegisterService';
import { getClient } from '../client/elasticsearch';

const balanceRoutes = Router();

balanceRoutes.get('/', async (req, res) => {
  const { hits } = await getClient().search({});

  return res.status(200).json(hits.hits);
});

balanceRoutes.post('/', (req, res) => {
  // const content = fs.readFileSync(filePath, 'utf-8');
  const { balanceSheet, date, companyId } = req.body;
  const result = Import(companyId, date, balanceSheet);

  return res.status(200).json(result);
});

export default balanceRoutes;
