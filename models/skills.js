const skills = [
    {id: 1, skills: 'HTML', done: true},
    {id: 2, skills: 'CSS', done: true},
    {id: 3, skills: 'JavaScript', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
	
function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skills => skills.id === id);
  skills.splice(idx, 1);
}