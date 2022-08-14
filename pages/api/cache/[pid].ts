import { CacheManager, CACHE_KEYS } from '../../../helpers/CacheManager';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise<void> ((resolve,_) => {
    const { pid } = req.query
    let str:string = (pid as string).toUpperCase() || "";
    var key : CACHE_KEYS = CACHE_KEYS[str as keyof typeof CACHE_KEYS]
    CacheManager.get(key)
    .then(data => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'max-age=180000');
      res.end(JSON.stringify(data));
      resolve();
    })
    .catch(error => {
      res.json(error);
      res.status(500).end();
      resolve();
    });
  })
  
}
