/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are native objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CollectionResponseSimplePublicObject', 'model/Error', 'model/SimplePublicObject', 'model/SimplePublicObjectInput'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CollectionResponseSimplePublicObject'), require('../model/Error'), require('../model/SimplePublicObject'), require('../model/SimplePublicObjectInput'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.BasicApi = factory(root.CrmObjects.ApiClient, root.CrmObjects.CollectionResponseSimplePublicObject, root.CrmObjects.Error, root.CrmObjects.SimplePublicObject, root.CrmObjects.SimplePublicObjectInput);
  }
}(this, function(ApiClient, CollectionResponseSimplePublicObject, Error, SimplePublicObject, SimplePublicObjectInput) {
  'use strict';

  /**
   * Basic service.
   * @module api/BasicApi
   * @version v3
   */

  /**
   * Constructs a new BasicApi. 
   * @alias module:api/BasicApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Archive
     * Move an Object identified by &#x60;{objectId}&#x60; to the recycling bin.
     * @param {String} objectType 
     * @param {String} objectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.archiveWithHttpInfo = function(objectType, objectId) {
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling archive");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling archive");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/{objectType}/{objectId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Archive
     * Move an Object identified by &#x60;{objectId}&#x60; to the recycling bin.
     * @param {String} objectType 
     * @param {String} objectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.archive = function(objectType, objectId) {
      return this.archiveWithHttpInfo(objectType, objectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating native objects is provided.
     * @param {String} objectType 
     * @param {Object} opts Optional parameters
     * @param {module:model/SimplePublicObjectInput} opts.simplePublicObjectInput 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SimplePublicObject} and HTTP response
     */
    this.createWithHttpInfo = function(objectType, opts) {
      opts = opts || {};
      var postBody = opts['simplePublicObjectInput'];

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling create");
      }


      var pathParams = {
        'objectType': objectType
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimplePublicObject;

      return this.apiClient.callApi(
        '/{objectType}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create
     * Create a CRM object with the given properties and return a copy of the object, including the ID. Documentation and examples for creating native objects is provided.
     * @param {String} objectType 
     * @param {Object} opts Optional parameters
     * @param {module:model/SimplePublicObjectInput} opts.simplePublicObjectInput 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SimplePublicObject}
     */
    this.create = function(objectType, opts) {
      return this.createWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read
     * Read an Object identified by &#x60;{objectId}&#x60;. Control what is returned via the &#x60;properties&#x60; query param.
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param {Array.<String>} opts.associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param {Boolean} opts.archived Whether to return only results that have been archived. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SimplePublicObject} and HTTP response
     */
    this.getByIdWithHttpInfo = function(objectType, objectId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getById");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling getById");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId
      };
      var queryParams = {
        'archived': opts['archived'],
      };
      var collectionQueryParams = {
        'properties': {
          value: opts['properties'],
          collectionFormat: 'multi'
        },
        'associations': {
          value: opts['associations'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SimplePublicObject;

      return this.apiClient.callApi(
        '/{objectType}/{objectId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Read
     * Read an Object identified by &#x60;{objectId}&#x60;. Control what is returned via the &#x60;properties&#x60; query param.
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param {Array.<String>} opts.associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param {Boolean} opts.archived Whether to return only results that have been archived. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SimplePublicObject}
     */
    this.getById = function(objectType, objectId, opts) {
      return this.getByIdWithHttpInfo(objectType, objectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List
     * Read a page of objects. Control what is returned via the &#x60;properties&#x60; query param.
     * @param {String} objectType 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of results to display per page. (default to 10)
     * @param {String} opts.after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param {Array.<String>} opts.properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param {Array.<String>} opts.associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param {Boolean} opts.archived Whether to return only results that have been archived. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionResponseSimplePublicObject} and HTTP response
     */
    this.getPageWithHttpInfo = function(objectType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getPage");
      }


      var pathParams = {
        'objectType': objectType
      };
      var queryParams = {
        'limit': opts['limit'],
        'after': opts['after'],
        'archived': opts['archived'],
      };
      var collectionQueryParams = {
        'properties': {
          value: opts['properties'],
          collectionFormat: 'multi'
        },
        'associations': {
          value: opts['associations'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = CollectionResponseSimplePublicObject;

      return this.apiClient.callApi(
        '/{objectType}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List
     * Read a page of objects. Control what is returned via the &#x60;properties&#x60; query param.
     * @param {String} objectType 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of results to display per page. (default to 10)
     * @param {String} opts.after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param {Array.<String>} opts.properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param {Array.<String>} opts.associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param {Boolean} opts.archived Whether to return only results that have been archived. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionResponseSimplePublicObject}
     */
    this.getPage = function(objectType, opts) {
      return this.getPageWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * Perform a partial update of an Object identified by &#x60;{objectId}&#x60;. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/SimplePublicObjectInput} opts.simplePublicObjectInput 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SimplePublicObject} and HTTP response
     */
    this.updateWithHttpInfo = function(objectType, objectId, opts) {
      opts = opts || {};
      var postBody = opts['simplePublicObjectInput'];

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling update");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling update");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['hapikey', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SimplePublicObject;

      return this.apiClient.callApi(
        '/{objectType}/{objectId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update
     * Perform a partial update of an Object identified by &#x60;{objectId}&#x60;. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/SimplePublicObjectInput} opts.simplePublicObjectInput 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SimplePublicObject}
     */
    this.update = function(objectType, objectId, opts) {
      return this.updateWithHttpInfo(objectType, objectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
