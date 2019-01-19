class StorageUtil {

    static save(key , value){
        localStorage.setItem(key , value);
    }

    static get(key){
        return localStorage.getItem(key);
    }

}

export default StorageUtil;
