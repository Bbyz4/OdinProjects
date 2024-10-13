class MapPairEntry
{
    #key;
    #value;

    constructor(key, value)
    {
        this.#key = key;
        this.#value = value;
    }

    getKey()
    {
        return this.#key;
    }

    getValue()
    {
        return this.#value;
    }

    setValue(value)
    {
        this.#value = value;
    }
}

class HashMap
{
    #BUCKET_MAX_SIZE = 16;
    #LOAD_FACTOR = 0.75;
    #size = 0;
    #buckets = null;

    constructor(size=16)
    {
        this.#buckets = Array.from({length: size}, () => []);
    }

    #hash(key)
    {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++)
        {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.#buckets.length;
        }

        return hashCode;
    }

    resize()
    {
        let oldBuckets = this.#buckets;

        this.#buckets = Array.from({length: oldBuckets.length*2}, () => []);

        oldBuckets.forEach(bucket => {
            bucket.forEach(entry => {
                this.set(entry.getKey(), entry.getValue());
            })
        })
    }

    set(key, value)
    {
        let hashedKey = this.#hash(key);
        let index = this.#buckets[hashedKey].findIndex(entry => entry.getKey() == key);

        if(index==-1)
        {
            this.#buckets[hashedKey].push(new MapPairEntry(key,value));
            this.#size++;
            if(this.#buckets[hashedKey].length > this.#BUCKET_MAX_SIZE*this.#LOAD_FACTOR)
            {
                this.resize();
            }
        }
        else
        {
            this.#buckets[hashedKey][index].setValue(value);
        }


    }

    get(key)
    {
        let hashedKey = this.#hash(key);
        let index = this.#buckets[hashedKey].findIndex(entry => entry.getKey() == key);

        if(index==-1)
        {
            return null;
        }
        else
        {
            return this.#buckets[hashedKey][index].getValue();
        }
    }

    has(key)
    {
        let hashedKey = this.#hash(key);
        let index = this.#buckets[hashedKey].findIndex(entry => entry.getKey() == key);

        return index!=-1;
    }

    remove(key)
    {
        let hashedKey = this.#hash(key);
        let index = this.#buckets[hashedKey].findIndex(entry => entry.getKey() == key);

        if(index==-1)
        {
            return false;
        }
        else
        {
            this.#buckets[hashedKey].splice(index, 1);
            this.#size--;
        }
    }

    length()
    {
        return this.#size;
    }

    clear()
    {
        this.#buckets = Array.from({length: size}, () => []);
        size = 0;
    }

    #elements(f)
    {
        let result = [];
        this.#buckets.forEach(bucket => 
        {
            let keyArr = bucket.map(elem => f(elem));
            result.push(...keyArr);
        });

        return result;
    }

    keys()
    {
        return this.#elements(elem => elem.getKey());
    }

    values()
    {
        return this.#elements(elem => elem.getValue());
    }

    entries()
    {
        return this.#elements(elem => [elem.getKey(), elem.getValue()]); 
    }   
};

module.exports = HashMap; //testing