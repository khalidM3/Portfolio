'use strict';
var projects = [];
function PopulateProjects(data) {
  for(var key in data)
    this[key] = data[key];
}

PopulateProjects.prototype.toHtml = function() {
  // Grab the template script
  var source = $('#project-template').html();
  // Compile the template
  console.log(source);
  var comptemplate = Handlebars.compile(source);
  return comptemplate(this);
};

PopulateProjects.loadAll = function (projData) {
  projData.forEach(function(element){
    projects.push(new PopulateProjects(element))
  });
}
PopulateProjects.makeIndexPage = function() {
  projects.forEach(function(element){
    $('#eG').append(element.toHtml());
})
};

PopulateProjects.fetchAll = function() {
  if(localStorage.projData) {
    var info = JSON.parse(localStorage.projData);
    PopulateProjects.loadAll(info)
    PopulateProjects.makeIndexPage();
  } else {
    var getinfo = $.getJSON('data/content.json', function(data) {
      localStorage.setItem('projData', JSON.stringify(data));
      PopulateProjects.loadAll(data);
      PopulateProjects.makeIndexPage();
    })
  }
}
