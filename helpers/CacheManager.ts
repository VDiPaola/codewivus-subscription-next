
export type CacheType = {
    data: any;
    timestamp: number;
}

export enum CACHE_KEYS {
    SKILLS = "SKILLS",
    SKILLTREES = "SKILLTREES"
}

type CacheDataType = {
    endpoint: string,
    minutesUntilRefresh: number
}

const BACKEND_URL = "http://localhost:4000";
export class CacheManager{
    private static _cache = new Map<CACHE_KEYS, CacheType>();
    private static _CACHE_DATA: Record<CACHE_KEYS, CacheDataType> = {
        [CACHE_KEYS.SKILLS]:{endpoint: BACKEND_URL+"/api/skills", minutesUntilRefresh: 60*12},
        [CACHE_KEYS.SKILLTREES]:{endpoint: BACKEND_URL+"/api/skilltrees", minutesUntilRefresh: 60*12},
    };

    //gets the data from cache, if enough time passed with refresh the data
    static get(key:CACHE_KEYS): Promise<CacheType>{
        return new Promise((resolve,reject)=> {
            if(!this._CACHE_DATA[key]) {
                console.error(`CACHE_DATA doesnt have a key for ${key}`)
                reject();
            }
        
            //key exists in cache and (current date - last updated date) in minutes is less than the threshold
            if(this.has(key) &&  
            ((Date.now() -  this._cache.get(key)!.timestamp) /1000)/60 < this._CACHE_DATA[key]!.minutesUntilRefresh){
                //return the cached data
                resolve(this._cache.get(key)!)
            }else{
                //get data for cache
                fetch(this._CACHE_DATA[key]!.endpoint)
                .then(res => res.json()).then(res => {
                    const cacheData = this.set(key, res);
                    resolve(cacheData);
                })
                .catch(()=>{
                    console.error(`Failed to fetch data for ${key}`)
                    reject();
                })
                
            }
        })
    }
    static has(key:CACHE_KEYS): Boolean{
        return this._cache.has(key);
    }
    static set(key:CACHE_KEYS, data:any): CacheType{
        const cacheData = {data, timestamp: Date.now()};
        this._cache.set(key, cacheData);
        return cacheData;
    }
}




