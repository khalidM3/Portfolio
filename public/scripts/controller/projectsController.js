'use strict';

(function(module){
  const projectsController = {};

  projectsController.render = () => {
    Projects.fetchAll();
    $('#slider').show();
    $('#home').hide()
    $('#about').hide();
    console.log('projectsController working')
  }

  module.projectsController = projectsController;
})(window);
