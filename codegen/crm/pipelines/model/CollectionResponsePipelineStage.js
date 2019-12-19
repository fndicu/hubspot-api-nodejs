/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
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
    define(['ApiClient', 'model/Paging', 'model/PipelineStage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Paging'), require('./PipelineStage'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmPipelines) {
      root.CrmPipelines = {};
    }
    root.CrmPipelines.CollectionResponsePipelineStage = factory(root.CrmPipelines.ApiClient, root.CrmPipelines.Paging, root.CrmPipelines.PipelineStage);
  }
}(this, function(ApiClient, Paging, PipelineStage) {
  'use strict';



  /**
   * The CollectionResponsePipelineStage model module.
   * @module model/CollectionResponsePipelineStage
   * @version v3
   */

  /**
   * Constructs a new <code>CollectionResponsePipelineStage</code>.
   * @alias module:model/CollectionResponsePipelineStage
   * @class
   * @param results {Array.<module:model/PipelineStage>} 
   */
  var exports = function(results) {
    var _this = this;

    _this['results'] = results;
  };

  /**
   * Constructs a <code>CollectionResponsePipelineStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionResponsePipelineStage} obj Optional instance to populate.
   * @return {module:model/CollectionResponsePipelineStage} The populated <code>CollectionResponsePipelineStage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [PipelineStage]);
      }
      if (data.hasOwnProperty('paging')) {
        obj['paging'] = Paging.constructFromObject(data['paging']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PipelineStage>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * @member {module:model/Paging} paging
   */
  exports.prototype['paging'] = undefined;



  return exports;
}));


