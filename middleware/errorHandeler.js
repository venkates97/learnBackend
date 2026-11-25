function errorHandeler(request,response,next) {

    response.status(404).json({"message":"Route is not found.."})
    
}

module.exports = errorHandeler;