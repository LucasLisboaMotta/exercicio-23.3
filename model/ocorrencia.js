const conect = require('../db/index');

const getAll = () => {
  return conect.execute('select * from ocorrencia');
}

module.exports = {
  getAll
 }
