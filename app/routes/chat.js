/**
* @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
* @param {*} application 
*/
module.exports = function(application){    
    application.post('/chat', function(req, res){
        application.app.controllers.chatController.iniciaChat(application, req, res);
    });
    
    application.get('/chat', function(req, res){
        application.app.controllers.chatController.iniciaChat(application, req, res);
    });
    
}