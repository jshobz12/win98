//remove weird white space and 'loading' span added by jquerymobile css file //
jQuery(document).on("mobileinit", function() {
  jQuery.mobile.autoInitializePage = false;
});

// selected and active classes add a z index to the window when clicked on, and remove the z index when clicking outside of the window //

$(document).ready(function(e) {
  $(".iframeContainerURL").on("click", function(e) {
    $(this).css("z-index", "10000000101");
    $(this).addClass("selected");
  });
});

$(document).ready(function(e) {
  $(".iframeURL").on("click", function(e) {
    $(this).addClass("active");
    $(this).addClass("selected");
    $(".desktop-container").on("click", function(e) {
      $(".iframeContainerURL").removeClass("active");
      $(".iframeContainerURL").removeClass("selected");
    });
  });
});

$(document).ready(function(e) {
  $(".desktop-icon-opened-AviraTxt").on("click", function(e) {
    $(".desktop-icon-opened-AviraTxt").addClass("active");
    $(".desktop-icon-opened-AviraTxt").addClass("selected");
    $(".desktop-container").on("click", function(e) {
      $(".desktop-icon-opened-AviraTxt").removeClass("active");
      $(".desktop-icon-opened-AviraTxt").removeClass("selected");
    });
  });
});

var deSelectAviraShortcut = $(".desktop-icon-wrapper-Avira-Content2");
if ($(".desktop-icon-wrapper-Avira-Content2").css("opacity") == "0.5") {
  if (
    !deSelectAviraShortcut.is(e.target) &&
    deSelectAviraShortcut.has(e.target).length == 0
  ) {
    deSelectAviraShortcut.css("opacity", "0");
  }
  $("desktop-icon-shortcut-Avira-Content2");
}

$(document).ready(function() {
  $(".iframeContainerLogo").on("click", function(e) {
    $(this).addClass("active");
    $(e.target).addClass("active");
    $(e.target).addClass("selected");
  });
});

//disable draggable on the inner content. can only drag from the top bar
$(".desktop-icon-opened-top-bar-iframeURL").draggable({
  disabled: true
});

$(".desktop-icon-opened-top-bar-iframeLogo").draggable({
  disabled: true
});

$(".desktop-icon-opened-content").draggable({
  disabled: true
});

$(".desktop-icon-opened-content-container-Avira-Content-2").draggable({
  disabled: true
});

$(".desktop-icon-opened-content-container-Avira-Content-2").draggable({
  disabled: true
});

$(".desktop-icon-opened-content-container").draggable({
  disabled: true
});

$(document).ready(function() {
  showContactUs = function() {
    $(".start-menu-contact-us").on("mouseover", function() {
      $(".start-menu-contact-us-shown").css("display", "block");
    });
    $(".start-menu-contact-us").on("mouseleave", function() {
      $(".start-menu-contact-us-shown").css("display", "none");
    });
  };
});

$(document).ready(function() {
  $(".start-menu-contact-us-shown").on("mouseover", function() {
    $(".start-menu-about-us-shown").css("display", "block");
  });
  $(".start-menu-contact-us-shown").on("mouseleave", function() {
    $(".start-menu-contact-us-shown").css("display", "none");
  });
});

$(document).ready(function() {
  showAboutUs = function() {
    $(".start-menu-about-us").on("mouseover", function() {
      $(".start-menu-about-us-shown").css("display", "block");
    });
    $(".start-menu-about-us").on("mouseleave", function() {
      $(".start-menu-about-us-shown").css("display", "none");
    });
  };
});

$(document).ready(function() {
  $(".start-menu-about-us-shown").on("mouseover", function() {
    $(".start-menu-about-us-shown").css("display", "block");
  });
  $(".start-menu-about-us-shown").on("mouseleave", function() {
    $(".start-menu-about-us-shown").css("display", "none");
  });
});

$(document).ready(function() {
  showOurAddress = function() {
    $(".start-menu-our-address").on("mouseover", function() {
      $(".start-menu-our-address-shown").css("display", "block");
    });
    $(".start-menu-our-address").on("mouseleave", function() {
      $(".start-menu-our-address-shown").css("display", "none");
    });
  };
});

$(document).ready(function() {
  $(".start-menu-our-address-shown").on("mouseover", function() {
    $(".start-menu-our-address-shown").css("display", "block");
  });
  $(".start-menu-our-address-shown").on("mouseleave", function() {
    $(".start-menu-our-address-shown").css("display", "none");
  });
});

// makes icons blue on click like an application //
$(document).ready(function() {
  $(".desktop-icon-shortcut-Avira-Content").on("click", function() {
    $(".desktop-icon-wrapper-Avira-Content").css({
      opacity: "0.5",
      height: "100%",
      background: "blue"
    });
    $(".desktop-icon-title-Avira-Content").css({
      top: "1px"
    });
  });
});

$(document).ready(function() {
  $(".inner-content-icon-logo1").on("click", function() {
    $(".inner-content-icon-logo1").css({
      opacity: "0.5",
      height: "100%",
      background: "blue"
    });
  });
});

$(document).ready(function() {
  $(".desktop-icon-shortcut-Avira-Content2").on("click", function() {
    $(".desktop-icon-wrapper-Avira-Content2").css({
      opacity: "0.5",
      height: "100%",
      background: "blue"
    });
    $(".desktop-icon-title-Avira-Content2").css({
      top: "1px"
    });
  });
});

$(document).on("click", function(e) {
  var deSelectAviraShortcut = $(".desktop-icon-wrapper-Avira-Content2");
  if ($(".desktop-icon-wrapper-Avira-Content2").css("opacity") == "0.5") {
    if (
      !deSelectAviraShortcut.is(e.target) &&
      deSelectAviraShortcut.has(e.target).length == 0
    ) {
      deSelectAviraShortcut.css("opacity", "0");
    }
    $("desktop-icon-shortcut-Avira-Content2");
  }
});

$(document).on("click", function(e) {
  var deSelectAviraShortcut = $(".desktop-icon-wrapper-Avira-ReadMe");
  if ($(".desktop-icon-wrapper-Avira-ReadMe").css("opacity") == "0.5") {
    if (
      !deSelectAviraShortcut.is(e.target) &&
      deSelectAviraShortcut.has(e.target).length == 0
    ) {
      deSelectAviraShortcut.css("opacity", "0");
    }
    $("desktop-icon-shortcut-Avira-ReadMe");
  }
});

$(document).ready(function() {
  $(".desktop-icon-shortcut-Avira-ReadMe").on("click", function() {
    $(".desktop-icon-wrapper-Avira-ReadMe").css({
      opacity: "0.5",
      height: "100%",
      background: "blue"
    });
    $(".desktop-icon-title-Avira-ReadMe").css({
      top: "2px"
    });
  });
});

$(document).on("click", function(e) {
  var deSelectAviraShortcut = $(".desktop-icon-wrapper-Avira-Content");
  if ($(".desktop-icon-wrapper-Avira-Content").css("opacity") == "0.5") {
    if (
      !deSelectAviraShortcut.is(e.target) &&
      deSelectAviraShortcut.has(e.target).length == 0
    ) {
      deSelectAviraShortcut.css("opacity", "0");
    }
    $("desktop-icon-shortcut-Avira-Content");
  }
});

$(document).ready(function() {
  $(".desktop-icon-shortcut-AviraURL").on("click", function() {
    $(".desktop-icon-wrapper-AviraURL").css({
      opacity: "0.5",
      height: "100%",
      background: "blue"
    });
    $(".desktop-icon-title-AviraURL").css({
      top: "3px"
    });
  });
});

$(document).on("click", function(e) {
  var deSelectAviraShortcut = $(".desktop-icon-wrapper-AviraURL");
  if ($(".desktop-icon-wrapper-AviraURL").css("opacity") == "0.5") {
    if (
      !deSelectAviraShortcut.is(e.target) &&
      deSelectAviraShortcut.has(e.target).length == 0
    ) {
      deSelectAviraShortcut.css("opacity", "0");
    }
    $("desktop-icon-shortcut-AviraURL");
  }
});

openAviraContent = function() {
  var counter = 0;
  $(".desktop-icon-shortcut-Avira-Content").bind("dblclick", function() {
    $(".desktop-icon-opened-Avira-Content").css("display", "block");
  });
};

//avira Logo open on click
$(document).ready(function() {
  $(".inner-content-icon-program1").on("dblclick", function() {
    $(".iframeContainerLogo").css("display", "block");
    $(".iframeContainerLogo").css("z-index", "101");
    $(".tasks").css("display", "flex");
    $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
    $(".top-bar-nav-options-x").on("click", function() {
      $(".iframeContainerLogo").animate(function() {
        $(".iframeContainerLogo").slideUp(100); //alt $(this).slideUp(400);
      });
      $(".iframeContainerLogo").css("display", "none");
    });
    $(".taskAviraLogo").on("click", function() {
      $(".iframeContainerLogo").addClass("selectedWindow");
    });
    if (screenwidth < 600) {
      $(".inner-content-icon-program1").on("tap", function() {
        $(".tasks").css("display", "flex");
        $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(
          ".tasks"
        );
        $(".iframeContainerLogo").css("display", "block");
        $(".taskAviraLogo").on("tap", function() {
          $(".iframeContainerLogo").addClass("selectedWindow");
        });
      });
    }
    if (screenwidth > 600 < 1025) {
      $(".inner-content-icon-program1").on("tap", function() {
        $(".tasks").css("display", "flex");
        $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(
          ".tasks"
        );
        $(".iframeContainerLogo").css("display", "block");
        $(".taskAviraLogo").on("tap", function() {
          $(".iframeContainerLogo").addClass("selectedWindow");
        });
      });
    }
  });
});

//avira URL open on click
$(document).ready(function() {
  $(".inner-content-icon-program3").on("dblclick", function() {
    $(".iframeContainerURL").css("display", "block");
    $(".iframeContainerURL").css("z-index", "101");
    $(".tasks").css("display", "flex");
    $("<button class='taskAviraURL'>Avira.url</button>").appendTo(".tasks");
    $(".taskAviraURL").on("click", function() {
      $(".iframeContainerURL").addClass("selectedWindow");
    });
    $(".top-bar-nav-options-x").on("click", function() {
      $(".iframeContainerURL").animate(function() {
        $(".iframeContainerURL").slideUp(100); //alt $(this).slideUp(400);
      });
      $(".iframeContainerURL").css("display", "none");
    });

    if (screenwidth < 600) {
      $(document).ready(function() {
        $(".inner-content-icon-program3").on("tap", function() {
          $(".iframeContainerURL").css("display", "block");
          $(".tasks").css("display", "flex");
          $("<button class='taskAviraURL'>Avira.url</button>").appendTo(
            ".tasks"
          );
          $(".taskAviraURL").on("tap", function() {
            $(".iframeContainerURL").addClass("selectedWindow");
          });
        });
      });
    }
    if (screenwidth > 600 < 1025) {
      $(".inner-content-icon-program1").on("tap", function() {
        $(".tasks").css("display", "flex");
        $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(
          ".tasks"
        );
        $(".iframeContainerLogo").css("display", "block");
        $(".taskAviraLogo").on("tap", function() {
          $(".iframeContainerLogo").addClass("selectedWindow");
        });
      });
    }
  });
});

//This has inner content clickability -- although not dynamic, it will open a program and that program will have a higher z-index -- i need to set up the home button and the back buttons to fix it all //
openAviraContent2 = function() {
  var counter = 0;
  $(".desktop-icon-shortcut-Avira-Content2").bind("dblclick", function() {
    $(".desktop-icon-opened-Avira-Content-2").css("display", "block");
    $(".tasks").css("display", "flex");
    $("<button class='taskAviraContent2'>Avira Content2</button>").appendTo(
      ".tasks"
    );
    $(".taskAviraContent2").on("click", function() {
      $(".desktop-icon-opened-Avira-Content-2").addClass("selectedWindow");
    });
    $(".inner-content-icon-logo3").on("dblclick", function() {
      $(".desktop-icon-opened-Avira-Content").css("display", "block");
      $(".desktop-icon-opened-Avira-Content").css("z-index", "100");
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraContent'>Avira Content</button>").appendTo(
        ".tasks"
      );
      $(".taskAviraContent").on("click", function() {
        $(".desktop-icon-opened-Avira-Content").addClass("selectedWindow");
      });
    });
  });
};

// this is the mock folder structure. need to make sure that it can be made dynamically //

$(document).ready(function() {
  $(".inner-content-icon-program2").on("dblclick", function() {
    $(".desktop-icon-opened-AviraTxt").css("display", "block");
    $(".desktop-icon-opened-AviraTxt").css("z-index", "101");
    $(".tasks").css("display", "flex");
    $("<button class='taskAviraTxt'>Avira.txt</button>").appendTo(".tasks");
    $(".taskAviraTxt").on("click", function() {
      $(".desktop-icon-opened-AviraTxt").addClass("selectedWindow");
    });
  });
});

$(document).ready(function() {
  $(".nav-bar-search-container-home").on("click", function() {
    $(".desktop-icon-opened-Avira-Content").css("animation-duration", "0");
    $(".desktop-icon-opened-Avira-Content").css("animation-name", "none");
    $(".desktop-icon-opened-Avira-Content").css("display", "block");
    $(".desktop-icon-opened-Avira-Content-2").css("display", "none");
  });
});

$(document).ready(function() {
  $(".top-bar-nav-options-x").on("click", function() {
    $(this)
      .closest(".bounceIn")
      .animate(
        {
          opacity: 0
        },
        500,
        function() {
          $(this).slideUp(100); //alt $(this).slideUp(400);
        }
      );
  });
});

$(document).ready(function() {
  $(".start-button").on("click", function() {
    $(".start-menu").addClass("start-menu-shown");
    $(".start-menu").removeClass("not-shown");
  });
});

$(document).mouseup(function(e) {
  var container = $(".start-menu-shown");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.addClass("not-shown");
    container.removeClass("start-menu-shown");
  }
});

openAviraTxt = function() {
  var counter = 0;
  $(".desktop-icon-shortcut-Avira-ReadMe").on("dblclick", function() {
    $(".desktop-icon-opened-AviraTxt").css("display", "block");
    $(".tasks").css("display", "flex");
    $("<button class='taskAviraTxt'>Avira.txt</button>").appendTo(".tasks");
  });

  console.log(counter);
};

$(document).ready(function() {
  $(".File").on("click", function() {
    $(".menu-container-file").css("display", "block");
  });
  if ($(".menu-container-file").css("display") == "block") {
    $(".File").on("click", function() {
      $(".menu-container-file").css("display", "none");
    });
  }
});

// $("<div class='specific-icon-content'></div>").appendTo(
//  ".desktop-icon-opened-content"
$(function() {
  $(".draggable").draggable({
    containment: "body"
  });
});

// time in bottom right corner

$(document).ready(function() {
  (function() {
    var $time = $(".taskbar-time");
    var update_time = function() {
      $time.text(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })
      );
      $time.attr(
        "title",
        new Date().toLocaleString([], {
          weekday: "long",
          month: "long",
          day: "2-digit",
          minute: "2-digit",
          hour: "2-digit"
        })
      );
      setTimeout(update_time, 1000);
    };
    update_time();
  })();
});

// mobile styling
var screenwidth = $(window).width();

var screenheight = $(window).height();

$(document).ready(function() {
  if (screenwidth < 600) {
    $(".desktop-icon-shortcut-Avira-ReadMe").on("tap", function() {
      $(".desktop-icon-opened-AviraTxt").css("display", "block");
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraTxt'>Avira.txt</button>").appendTo(".tasks");
      $(".taskAviraTxt").on("tap", function() {
        $(".desktop-icon-opened-AviraTxt").addClass("selectedWindow");
      });
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  if (screenwidth < 600) {
    var counter = 0;
    $(".desktop-icon-shortcut-Avira-Content2").on("tap", function() {
      $(".desktop-icon-opened-Avira-Content-2").css("display", "block");

      counter++;
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  if (screenwidth < 600) {
    $(".inner-content-icon-logo3").on("tap", function() {
      $(".desktop-icon-opened-Avira-Content").css("display", "block");
      $(".desktop-icon-opened-Avira-Content").css("z-index", "101");
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  if (screenwidth < 600) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".iframeContainerLogo").css("display", "block");
      $(".iframeContainerLogo").css("z-index", "101");
      $(".desktop-icon-opened-top-bar-iframeLogo").css("display", "block");
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira.png</button>").appendTo(".tasks");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
      $(".top-bar-nav-options-x").on("tap", function() {
        $(this)
          .closest(".iframeContainerLogo")
          .css("display", "none");
      });
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  if (screenwidth < 600) {
    $(".inner-content-icon-program2").on("tap", function() {
      $(".desktop-icon-opened-AviraTxt").css("display", "block");
      $(".desktop-icon-opened-AviraTxt").css("z-index", "101");
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraTxt'>Avira.txt</button>").appendTo(".tasks");
      $(".taskAviraTxt").on("tap", function() {
        $(".desktop-icon-opened-AviraTxt").addClass("selectedWindow");
      });
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  if (screenwidth < 600) {
    $(".inner-content-icon-program3").on("tap", function() {
      $(".iframeContainerURL").css("display", "block");
      $(".iframeContainerURL").css("z-index", "101");
      $(".desktop-icon-opened-top-bar-iframeURL").css("display", "block");
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraURL'>Avira.url</button>").appendTo(".tasks");
      $(".taskAviraURL").on("tap", function() {
        $(".iframeContainerURL").addClass("selectedWindow");
      });
      $(".top-bar-nav-options-x").on("tap", function() {
        $(this)
          .closest(".iframeContainerURL")
          .css("display", "none");
      });
    });
  }
  if (screenwidth > 600 < 1025) {
    $(".inner-content-icon-program1").on("tap", function() {
      $(".tasks").css("display", "flex");
      $("<button class='taskAviraLogo'>Avira Logo</button>").appendTo(".tasks");
      $(".iframeContainerLogo").css("display", "block");
      $(".taskAviraLogo").on("tap", function() {
        $(".iframeContainerLogo").addClass("selectedWindow");
      });
    });
  }
});

$(document).ready(function() {
  $(".top-bar-nav-options-x").on("tap", function() {
    $(this)
      .closest(".bounceIn")
      .animate(
        {
          opacity: 0
        },
        500,
        function() {
          $(this).slideUp(100); //alt $(this).slideUp(400);
        }
      );
  });
});
