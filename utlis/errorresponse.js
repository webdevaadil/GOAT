class ErrorResponse extends Error{
    constructor(message,statusCode){
        super(message.json());
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}
module.exports=ErrorResponse