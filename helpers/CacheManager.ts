
export type CacheType = {
    data: any;
    timestamp: number;
}

export enum CACHE_KEYS {
    SKILLS
}

//maybe do this
const ENDPOINTS = new Map<CACHE_KEYS, string>();

export class CacheManager{
    private static _cache = new Map<CACHE_KEYS, CacheType>();

    static get(key:CACHE_KEYS): CacheType | undefined{
        return this._cache.get(key);
    }
    static has(key:CACHE_KEYS): Boolean{
        return this._cache.has(key);
    }
    static set(key:CACHE_KEYS, data:any){
        this._cache.set(key, {data, timestamp: Date.now()});
    }
}




