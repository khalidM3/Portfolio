'use strict';
var projlist = document.getElementById('projlist');
var listArray = [];
function Content(projectName, link, about, dateFinished) {
  this.projectName = projectName;
  this.link = link;
  this.about = about;
  this.dateFinished = dateFinished;
  listArray.push(this);
}

var makeProjList = function() {
  for(var i = 0; i < listArray.length; i++){
    projlist.innerHTML = '<li>'+listArray[i]+'</li>'
  }
}

new Content('mobile first', '', 'making a website more phone friendly', '1221313');
makeProjList();
