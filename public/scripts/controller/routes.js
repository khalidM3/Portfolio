'use strict';

page('/', homeController.render);
page('/projects', projectsController.render);
page('/about', aboutController.render);

page();
