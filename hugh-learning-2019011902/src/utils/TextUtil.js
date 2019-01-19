class TextUtil {

    static isEmpty(text){
        if(text === undefined
            || text === null
            || text === ''){
            return true;
        }
        return false;
    }

}

export default TextUtil;
