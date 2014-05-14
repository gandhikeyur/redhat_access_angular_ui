'use strict';

angular.module('RedhatAccess.cases')
  .service('CaseService', [
    'strataService',
    function(strataService) {
      this.
      case = {};
      this.versions = [];
      this.products = [];
      this.statuses = [];
      this.severities = [];
      this.groups = [];
      this.account = {};

      /**
       * Add the necessary wrapper objects needed to properly display the data.
       *
       * @param rawCase
       */
      this.defineCase = function(rawCase) {
        /*jshint camelcase: false */
        rawCase.severity = {
          'name': rawCase.severity
        };
        rawCase.status = {
          'name': rawCase.status
        };
        rawCase.product = {
          'name': rawCase.product
        };
        rawCase.group = {
          'number': rawCase.folder_number
        };
        rawCase.type = {
          'name': rawCase.type
        };

        this.
        case = rawCase;
      };

      this.defineAccount = function(account) {
        this.account = account;
      };

      this.clearCase = function() {
        this.
        case = {};
        this.versions = [];
        this.products = [];
        this.statuses = [];
        this.severities = [];
        this.groups = [];
        this.account = {};
      };

      this.populateGroups = function() {
        strataService.groups.list().then(
          angular.bind(this, function(groups) {
            this.groups = groups;
          })
        );
      };
    }
  ]);