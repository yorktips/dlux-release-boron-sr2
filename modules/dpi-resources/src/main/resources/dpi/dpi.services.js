/*
 * Copyright (c) 2014 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(['app/dpi/dpi.module'],function(dpi) {

  dpi.factory('DpiRestangular', function(Restangular, ENV) {
    return Restangular.withConfig(function(RestangularConfig) {
      RestangularConfig.setBaseUrl(ENV.getBaseURL("MD_SAL"));
    });
  });

  dpi.factory('DpiInventorySvc', function(DpiRestangular) {
    var svc = {
      base: function() {
        return DpiRestangular.one('restconf').one('config').one('whisdpi:whisdpi');
      },
      data : null
    };

   svc.getCurrentData = function() {
      console.log("svc.getCurrentData");
      //svc.data = svc.base().get();
      console.log(svc.data);
      return svc.data;
    };

    svc.getAllNodes = function() {
      console.log("svc.getCurrentData");
      svc.data = svc.base().get();
      console.log(svc.data);
      return svc.data;
    };

    svc.getNode = function(node) {
      console.log("svc.getCurrentData");
      svc.data = svc.base().get();
      console.log(svc.data);
      return svc.data;
    };

    return svc;
  });

});


