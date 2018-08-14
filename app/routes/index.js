/**
* @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
* @param {*} application 
*/
module.exports = function(application){
    
    application.get('/', function(req, res){
        application.app.controllers.indexController.home(application, req, res);
    });
    
}