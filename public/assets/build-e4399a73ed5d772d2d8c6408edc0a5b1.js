(function() {
  var Build;

  Build = (function() {
    Build.interval = null;

    function Build(build_url, build_status, build_status_url) {
      clearInterval(Build.interval);
      console.log(build_url);
      console.log(build_status);
      console.log(build_status_url);
      if (build_status === "running") {
        Build.interval = setInterval((function(_this) {
          return function() {
            if (window.location.href === build_url) {
              return $.ajax({
                url: build_status_url,
                dataType: "json",
                success: function(build) {
                  if (build.deployment_status === "running") {

                  } else {
                    return $.pjax({
                      url: build_url,
                      container: '.content'
                    });
                  }
                }
              });
            }
          };
        })(this), 4000);
      }
    }

    return Build;

  })();

  this.Build = Build;

}).call(this);
