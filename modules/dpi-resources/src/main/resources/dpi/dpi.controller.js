/*
 * Copyright (c) 2014 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/dpi/dpi.module','app/dpi/dpi.services'], function(dpi) {

  dpi.controller('rootDpiCtrl', function($rootScope) {
    $rootScope['section_logo'] = 'assets/images/logo_dpi.gif';
  });


  dpi.controller('allDPIsCtrl', function($http, $scope, DpiInventorySvc, $timeout) {
    console.log("controller allDPIsCtrl start");
    DpiInventorySvc.getAllNodes().then(function(data) {
      $scope.data = data.whisdpi;
      //$scope.data = angular.toJson(data.whisdpi);
      console.log("scope.data");
      console.log($scope.data);
       
      console.log("data.length");
      console.log($scope.data.length);
      if ($scope.data.length >0 ) {
	console.log("Found data");
      }else{
        console.log("Data is emptu");
      }

     // console.log($scope.data.switchName);
      console.log($scope.data.switch-name);
      //console.log($scope.data.dpiRule);
      console.log($scope.data.dpi-rule);
      //$scope.$emit('lastentry');
      //$('.footable').footable();
    });

    var tableRendered = false;
    $scope.$watch('dpiSearch.id', function() {
      console.log("dpiSearch.id ");
      if(tableRendered) {
          $timeout(function () {
          console.log("redraw because of dpiSearch.id");
          $('.footable').trigger('footable_redraw');//force a redraw
        }, 20);
      }
    });

      $scope.$on('lastentry', function() {
        console.log("lastentry started");
        // Initialize footable table
        if(!tableRendered){
            console.log("Initialize footable table");
          //$('.footable').footable();
          $('.footable').trigger('footable_redraw');
          tableRendered = true;
        }
      });
  });

  dpi.controller('dpiDetailCtrl', function($scope, $stateParams, DpiInventorySvc, $timeout) {
    console.log("dpiDetailCtrl started");
    var currentData = DpiInventorySvc.getCurrentData();
    if(currentData != null) {
        $scope.data = currentData;
    }
    else {
      $scope.data = null;
    }
    var tableRendered = false;
    $scope.$watch('dpiDetailSearch', function() {
      if(tableRendered) {
          $timeout(function () {
          $('.footable').trigger('footable_redraw');//force a redraw
        }, 20);
      }
    });

      $scope.$on('lastentry', function() {
        // Initialize footable table
        if(!tableRendered){
          $('.footable').footable();
          tableRendered = true;
        }
      });
  });

});
