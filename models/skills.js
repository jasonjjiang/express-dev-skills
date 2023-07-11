const skills = [
    {id: 1, skills: 'HTML', done: true},
    {id: 2, skills: 'CSS', done: true},
    {id: 3, skills: 'JavaScript', done: true},
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }