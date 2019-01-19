
let debug = true;

class LogUtil {

    static debug(message){
        if(debug){
            console.log(message);
        }
    }

}

export default LogUtil;
