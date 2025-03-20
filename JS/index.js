const varEmail = document.getElementById('email');
const varSenha = document.getElementById('senha');
const varEnviar = document.getElementById('enviar');

const login = {
    nome: 'pedro@gmail.com',
    senha: '1234',
}

function validarCampos(varEmail, varSenha) {

    if (varEmail == '' && varSenha == '') {
        window.alert('Todos os campos são obrigatórios!!!');
    } else if (varEmail === login.email && varSenha === login.senha) {
        window.alert('Login realizado com sucesso!!!');
    } else {
        window.alert('Email ou senha incorretos!');
    }

}
