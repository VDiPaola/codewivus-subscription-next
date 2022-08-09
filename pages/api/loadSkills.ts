import { CacheManager, CACHE_KEYS, CacheType } from '../../helpers/CacheManager';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<any>
) {
  //only fetch if need to
  if(CacheManager.has(CACHE_KEYS.SKILLS)){
    //check timespan
    const data: CacheType = CacheManager.get(CACHE_KEYS.SKILLS)!;
    const hours = ((Date.now() - data.timestamp) / 1000) / 60
    console.log(hours)
    if(hours < 1) {
      //not enough time passed
      response.status(200).json("updated within the hour")
      return;
    }
  }
  fetch("http://localhost:4000/api/users")
  .then(res => res.json())
  .then(res => {
    CacheManager.set(CACHE_KEYS.SKILLS, res)
    response.status(200).json("updated skill cache")
  })
  .catch(()=>{
    response.status(400).send("Failed to fetch skill data")
  })
}
