'use strict';

(function(module){

  const aboutController = {};
  aboutController.render = function(){
    Projects.fetchAll();
    $('#about').show()
    $('#slider').hide()
    console.log('aboutController working')
  }

  module.aboutController = aboutController;
})(window);
