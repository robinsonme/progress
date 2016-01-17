if (Meteor.isClient) {

  Template.progress.events({
    'click input.run': function(event) {
        var elem = document.getElementById("myBar");
        var width = 1;
        var classType = 'progress-bar progress-bar-striped active progress-bar-danger';
        elem.className = classType;
        var go = function () {
          if (width == 100) {
            clearInterval(id);
            classType = 'progress-bar progress-bar-success';
            elem.className = classType;
          } else {
            width++;
            if (width >= 33) {
              classType = 'progress-bar progress-bar-striped active progress-bar-warning';
              elem.className = classType;
            } if (width >= 66) {
              classType = 'progress-bar progress-bar-striped active progress-bar-info';
              elem.className = classType;
            } if (width >= 97) {
              classType = 'progress-bar progress-bar-striped active progress-bar-success';
              elem.className = classType;
            }
            elem.style.width = width + '%';
          }
        };
        var id = setInterval(go, 100);
    },
    'click input.reset': function(event) {
        var elem = document.getElementById("myBar");
        var width = 1;
        var classType = '';
        elem.className = classType;
        elem.style.width = width + '%';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
