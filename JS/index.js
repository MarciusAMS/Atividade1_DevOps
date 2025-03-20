const varEmail = document.getElementById('email');
const varSenha = document.getElementById('senha');
const varEnviar = document.getElementById('enviar');

const login = {
    email: 'pedro@gmail.com',
    senha: '1234',
}

function validarCampos(varEmail, varSenha) {

    if (varEmail === login.email && varSenha === login.senha) {
        window.alert('Login realizado com sucesso!!!');
    } else {
        window.alert('Email ou senha incorretos!');
    }

}
