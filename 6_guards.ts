function strip(x : number | string){
    if(typeof x === 'number'){
        return x.toFixed()
    }
    return x.trim()
}

class MyResponse{
    header = 'response header'
    result = 'response result'
}

class MyError{
    header = 'error header'
    message = 'error message'
}

function handle(res : MyResponse | MyError) : string{
    if(res instanceof MyResponse){
        return res.header + res.result
    }else{
        return res.header + res.message
    }
}

//==============

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type : AlertType){
    //...
}

setAlertType('success')
setAlertType('warning')
//setAlertType('default') - работать вызов функции не будет т.к значение default не указано в типе AlertType

