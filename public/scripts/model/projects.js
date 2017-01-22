'use strict';
(function(module){
  function Projects(data) {
    Object.keys(data).forEach(e => this[e] = data[e]);
  }

  Projects.all = []


  Projects.prototype.toHtml = function() {
    // Grab the template script
    var source = $('#project-template').html();
    // Compile the template
    var comptemplate = Handlebars.compile(source);
    return comptemplate(this);
  };

  Projects.loadAll = projData => {
    Projects.all = projData.map(data => new Projects(data));
    //                 NOTE
    //can also be wtiten like this
    // projData.forEach(function(element){
    //   Projects.all.push(new Projects(element))
    // });
  }
  Projects.makeIndexPage = () => {
    Projects.all.forEach(element => {
      $('#eG').append(element.toHtml());
    })
  };
//                 NOTE
// gets all the info to make the projects from local storage or the data
  Projects.fetchAll = function() {
    if(localStorage.projData) {
      var info = JSON.parse(localStorage.projData);
      Projects.loadAll(info)
      Projects.makeIndexPage();
    } else {
      var getinfo = $.getJSON('data/content.json', function(data) {
        localStorage.setItem('projData', JSON.stringify(data));
        Projects.loadAll(data);
        Projects.makeIndexPage();
      })
    }
  }
  module.Projects = Projects;

})(window)
