/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @param {*} application 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.home = function(application, req, res){
    res.render('index', {
        validacao: {}
    });
}