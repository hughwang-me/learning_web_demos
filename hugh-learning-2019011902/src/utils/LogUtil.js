
let debug;

class LogUtil {

    constructor(){
        debug = true;
    }

    static debug(message){
        if(debug){
            console.log(message);
        }
    }

}

export default LogUtil;
