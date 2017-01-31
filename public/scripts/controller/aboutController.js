'use strict';

(function(module){

  const aboutController = {};
  aboutController.render = () => {
    Projects.fetchAll();
    $('#about').show()
    $('#home').hide()
    $('#slider').hide()
    console.log('aboutController working')
  }

  module.aboutController = aboutController;
})(window);
