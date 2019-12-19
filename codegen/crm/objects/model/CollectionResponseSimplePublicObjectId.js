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
    define(['ApiClient', 'model/Paging', 'model/SimplePublicObjectId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./SimplePublicObjectId'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.CollectionResponseSimplePublicObjectId = factory(root.CrmObjects.ApiClient, root.CrmObjects.Paging, root.CrmObjects.SimplePublicObjectId);
  }
}(this, function(ApiClient, Paging, SimplePublicObjectId) {
  'use strict';



  /**
   * The CollectionResponseSimplePublicObjectId model module.
   * @module model/CollectionResponseSimplePublicObjectId
   * @version v3
   */

  /**
   * Constructs a new <code>CollectionResponseSimplePublicObjectId</code>.
   * @alias module:model/CollectionResponseSimplePublicObjectId
   * @class
   * @param results {Array.<module:model/SimplePublicObjectId>} 
   */
  var exports = function(results) {
    var _this = this;

    _this['results'] = results;
  };

  /**
   * Constructs a <code>CollectionResponseSimplePublicObjectId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionResponseSimplePublicObjectId} obj Optional instance to populate.
   * @return {module:model/CollectionResponseSimplePublicObjectId} The populated <code>CollectionResponseSimplePublicObjectId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [SimplePublicObjectId]);
      }
      if (data.hasOwnProperty('paging')) {
        obj['paging'] = Paging.constructFromObject(data['paging']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SimplePublicObjectId>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * @member {module:model/Paging} paging
   */
  exports.prototype['paging'] = undefined;



  return exports;
}));


