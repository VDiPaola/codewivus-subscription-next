import { CacheManager, CACHE_KEYS, CacheType } from '../../helpers/CacheManager';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<any>
) {
    const { pid } = req.query
    let test: string = pid as keyof CacheType;
    console.log(test)
    response.status(200).send(CacheManager.get(CACHE_KEYS.SKILLS)?.data)
}
