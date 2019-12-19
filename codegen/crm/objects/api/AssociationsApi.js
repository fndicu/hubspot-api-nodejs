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
    define(['ApiClient', 'model/CollectionResponseSimplePublicObjectId', 'model/Error', 'model/SimplePublicObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CollectionResponseSimplePublicObjectId'), require('../model/Error'), require('../model/SimplePublicObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.AssociationsApi = factory(root.CrmObjects.ApiClient, root.CrmObjects.CollectionResponseSimplePublicObjectId, root.CrmObjects.Error, root.CrmObjects.SimplePublicObject);
  }
}(this, function(ApiClient, CollectionResponseSimplePublicObjectId, Error, SimplePublicObject) {
  'use strict';

  /**
   * Associations service.
   * @module api/AssociationsApi
   * @version v3
   */

  /**
   * Constructs a new AssociationsApi. 
   * @alias module:api/AssociationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Remove an association between two objects
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @param {String} toObjectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.archiveAssociationWithHttpInfo = function(objectType, objectId, associatedObjectType, toObjectId) {
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling archiveAssociation");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling archiveAssociation");
      }

      // verify the required parameter 'associatedObjectType' is set
      if (associatedObjectType === undefined || associatedObjectType === null) {
        throw new Error("Missing the required parameter 'associatedObjectType' when calling archiveAssociation");
      }

      // verify the required parameter 'toObjectId' is set
      if (toObjectId === undefined || toObjectId === null) {
        throw new Error("Missing the required parameter 'toObjectId' when calling archiveAssociation");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId,
        'associatedObjectType': associatedObjectType,
        'toObjectId': toObjectId
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
        '/{objectType}/{objectId}/associations/{associatedObjectType}/{toObjectId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove an association between two objects
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @param {String} toObjectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.archiveAssociation = function(objectType, objectId, associatedObjectType, toObjectId) {
      return this.archiveAssociationWithHttpInfo(objectType, objectId, associatedObjectType, toObjectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Associate two objects
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @param {String} toObjectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SimplePublicObject} and HTTP response
     */
    this.createAssociationWithHttpInfo = function(objectType, objectId, associatedObjectType, toObjectId) {
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling createAssociation");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling createAssociation");
      }

      // verify the required parameter 'associatedObjectType' is set
      if (associatedObjectType === undefined || associatedObjectType === null) {
        throw new Error("Missing the required parameter 'associatedObjectType' when calling createAssociation");
      }

      // verify the required parameter 'toObjectId' is set
      if (toObjectId === undefined || toObjectId === null) {
        throw new Error("Missing the required parameter 'toObjectId' when calling createAssociation");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId,
        'associatedObjectType': associatedObjectType,
        'toObjectId': toObjectId
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
      var returnType = SimplePublicObject;

      return this.apiClient.callApi(
        '/{objectType}/{objectId}/associations/{associatedObjectType}/{toObjectId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Associate two objects
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @param {String} toObjectId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SimplePublicObject}
     */
    this.createAssociation = function(objectType, objectId, associatedObjectType, toObjectId) {
      return this.createAssociationWithHttpInfo(objectType, objectId, associatedObjectType, toObjectId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List associations of an object by type
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CollectionResponseSimplePublicObjectId} and HTTP response
     */
    this.getAssociationsWithHttpInfo = function(objectType, objectId, associatedObjectType) {
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getAssociations");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling getAssociations");
      }

      // verify the required parameter 'associatedObjectType' is set
      if (associatedObjectType === undefined || associatedObjectType === null) {
        throw new Error("Missing the required parameter 'associatedObjectType' when calling getAssociations");
      }


      var pathParams = {
        'objectType': objectType,
        'objectId': objectId,
        'associatedObjectType': associatedObjectType
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
      var returnType = CollectionResponseSimplePublicObjectId;

      return this.apiClient.callApi(
        '/{objectType}/{objectId}/associations/{associatedObjectType}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List associations of an object by type
     * @param {String} objectType 
     * @param {String} objectId 
     * @param {String} associatedObjectType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CollectionResponseSimplePublicObjectId}
     */
    this.getAssociations = function(objectType, objectId, associatedObjectType) {
      return this.getAssociationsWithHttpInfo(objectType, objectId, associatedObjectType)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
