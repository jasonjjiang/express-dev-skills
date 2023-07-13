// controllers/todos.js
const skills = require('../models/skills');

module.exports = {
  index,
  show,
  new: newSkills,
  create,
  deleteSkills,
};
	
function newSkills (req, res) {
  res.render('skills/new', {title:'New Skills'});
}

function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skills: skills.getOne(req.params.id),
    });
  }

  function create(req, res) {
    skills.create(req.body)
    res.redirect('/skills');
    
  }
  function deleteSkills(req, res) {
  skills.deleteOne(req.params.id);
  res.redirect('/skills');
}



  