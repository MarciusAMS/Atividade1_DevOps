const varNome = document.getElementById('nome');
const varSenha = document.getElementById('senha');
const varEnviar = document.getElementById('enviar');

const login = {
    nome: 'Pedro',
    senha: '1234',
}

function validarCampos(varNome, varSenha) {
    if (varNome == '' && varSenha == '') {
        window.alert('Todos os campos são obrigatórios!!!');
    }
    if (varNome != login.nome && varSenha != login.senha) {
        window.alert('Nome ou senha incorretos!');
    } else {
        window.alert('Login realizado com sucesso!!!');
    }
}