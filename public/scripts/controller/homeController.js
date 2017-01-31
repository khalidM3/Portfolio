'use strict';

(function(module){

  const homeController = {};
  homeController.render = () => {
    Projects.fetchAll();
    $('#home').show()
    $('#about').hide()
    $('#slider').hide()
    console.log('homeController working')
  }

  module.homeController = homeController;
})(window);
