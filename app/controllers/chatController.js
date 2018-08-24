/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @param {*} application 
 * @param {*} req 
 * @param {*} res 
 */

module.exports.iniciaChat = function(application, req, res){
    let dadosForm = req.body;
    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();    
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);    

    let erros = req.validationErrors();

    if(erros){
        res.render('index',{
            validacao: erros
        });
        return;
    }

    /**
     * Recupera o io através da instância do Express usando o método get
     */
    application.get('io').emit('msgCliente', {
        apelido: dadosForm.apelido,
        mensagem: 'Acabou de entrar no chat'
    });

    res.render('chat');
}