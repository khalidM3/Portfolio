'use strict';

(function(module){
  const projectsController = {};

  projectsController.render = () => {
    Projects.fetchAll();
    $('#slider').show();
    $('#about').hide();
    console.log('projectsController working')
  }

  module.projectsController = projectsController;
})(window);
