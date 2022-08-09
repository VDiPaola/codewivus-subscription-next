import { CacheManager, CACHE_KEYS } from '../../../../helpers/CacheManager';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<any>
) {
  const { pid } = req.query
  let str:string = (pid as string).toUpperCase() || "";
  var key : CACHE_KEYS = CACHE_KEYS[str as keyof typeof CACHE_KEYS]
    response.status(200).send(CacheManager.get(key)?.data)
}
