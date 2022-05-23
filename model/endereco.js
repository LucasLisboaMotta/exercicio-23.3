const conect = require('../db/index');

const getAll = () => {
  return conect.execute('select * from endereco');
}

const getById = (id) => {
  return conect.execute('select * from endereco where endereco.id_endereco = ?', [id]);
}

const postNewAddress = (logradouro, numero, bairro, cep) => {
  conect.execute('insert into endereco (logradouro, numero, bairro, cep) values (?, ?, ?, ?)', [logradouro, numero, bairro, cep])
}

module.exports = {
 getAll,
 getById,
 postNewAddress
}
