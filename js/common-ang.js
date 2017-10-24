var app = angular.module('techApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/web', {
      templateUrl: "technology.html",
      controller: "webCtrl"
    })
    .when('/database', {
      templateUrl: "technology.html",
      controller: "dbCtrl"
    })
    .when('/java', {
      templateUrl: "technology.html",
      controller: "javaCtrl"
    })
    .when('/microsoft', {
      templateUrl: "technology.html",
      controller: "msCtrl"
    })
    .when('/graphic', {
        templateUrl: "technology.html",
        controller: "graphicCtrl"
      })
      .when('/automation', {
        templateUrl: "technology.html",
        controller: "automationCtrl"
      })
      .when('/atm', {
        templateUrl: "technology.html",
        controller: "atmCtrl"
      })
      .when('/finance', {
        templateUrl: "technology.html",
        controller: "financeCtrl"
      })
      .when('/business', {
          templateUrl: "technology.html",
          controller: "businessCtrl"
        })
});

app.controller("webCtrl", function($scope, $route) {
  $scope.planet = {
    img: 'images/webdesign_body.jpg',
    title: 'Web Technologies',
    description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
   
  }
});

app.controller("dbCtrl", function($scope, $route) {
  $scope.planet = {
    img: 'images/database_body.jpg',
    title: 'Database',
    description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
  }
});

app.controller("javaCtrl", function($scope, $route) {
  $scope.planet = {
    img: 'images/java_body.jpg',
    title: 'Java',
    description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
  
  }
});

app.controller("msCtrl", function($scope, $route) {
  $scope.planet = {
    img: 'images/microsoft_body.jpg',
    title: 'Microsoft Technologies',
    description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
  
  }
});

app.controller("graphicCtrl", function($scope, $route) {
    $scope.planet = {
      img: 'images/graphic_body.jpg',
      title: 'Graphic Design',
      description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
    }
  });
  
  app.controller("automationCtrl", function($scope, $route) {
    $scope.planet = {
      img: 'images/automation_body.jpg',
      title: 'Test Automation',
      description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
    }
  });

  app.controller("atmCtrl", function($scope, $route) {
    $scope.planet = {
      img: 'images/atm_body.jpg',
      title: 'ATM Software',
      description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
    }
  });

  app.controller("financeCtrl", function($scope, $route) {
    $scope.planet = {
      img: 'images/finance_body.jpg',
      title: 'Finance Management',
      description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
    }
  });

  app.controller("businessCtrl", function($scope, $route) {
    $scope.planet = {
      img: 'images/business_body.jpg',
      title: 'Business Operations',
      description: 'We provide services for atm We provide services for atm We provide services for atm We provide services for atm We provide services for atm ',
    
    }
  });
