/*
 * Copyright (c) 2014 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['angularAMD', 'app/routingConfig', 'Restangular', 'angular-translate', 'angular-translate-loader-static-files', 'app/core/core.services', 'common/config/env.module'], function(ng) {
  var dpi = angular.module('app.dpi', ['app.core', 'pascalprecht.translate', 'ui.router.state', 'restangular', 'config']);

  dpi.config(function($stateProvider, NavHelperProvider, $translateProvider) {

    NavHelperProvider.addControllerUrl('app/dpi/dpi.controller');
    NavHelperProvider.addToMenu('dpi', {
     "link" : "#/dpi/index",
     "active" : "main.dpi.*",
     "title" : "DPI",
     "icon" : "icon-arrow-down",
     "page" : {
        "title" : "DPI3",
        "description" : "Whistler DPI Feature"
     }
    });

    var access = routingConfig.accessLevels;
    $stateProvider.state('main.dpi', {
      url: 'dpi',
      access: access.admin,
      views: {
        'content': {
          templateUrl: 'src/app/dpi/root.tpl.html',
          controller: 'rootDpiCtrl'
        }
      }
    });

    $stateProvider.state('main.dpi.index', {
      url: '/index',
      access: access.admin,
      views: {
        '': {
          templateUrl: 'src/app/dpi/index.tpl.html',
          controller: 'allDPIsCtrl'
        }
      }
    });

    $stateProvider.state('main.dpi.detail', {
      url: '/:dpiId/detail',
      access: access.admin,
      views: {
        '': {
          templateUrl: 'src/app/dpi/detail.tpl.html',
          controller: 'dpiDetailCtrl'
        }
      }
    });

  });

  return dpi;
});
