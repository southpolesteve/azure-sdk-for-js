/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/openShiftManagedClustersMappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClientContext } from "../containerServiceClientContext";

/** Class representing a OpenShiftManagedClusters. */
export class OpenShiftManagedClusters {
  private readonly client: ContainerServiceClientContext;

  /**
   * Create a OpenShiftManagedClusters.
   * @param {ContainerServiceClientContext} client Reference to the service client.
   */
  constructor(client: ContainerServiceClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of OpenShift managed clusters in the specified subscription. The operation returns
   * properties of each OpenShift managed cluster.
   * @summary Gets a list of OpenShift managed clusters in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): Promise<Models.OpenShiftManagedClustersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OpenShiftManagedClustersListResponse>;
  }

  /**
   * Lists OpenShift managed clusters in the specified subscription and resource group. The operation
   * returns properties of each OpenShift managed cluster.
   * @summary Lists OpenShift managed clusters in the specified subscription and resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): Promise<Models.OpenShiftManagedClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.OpenShiftManagedClustersListByResourceGroupResponse>;
  }

  /**
   * Gets the details of the managed OpenShift cluster with a specified resource group and name.
   * @summary Gets a OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.OpenShiftManagedCluster>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OpenShiftManagedCluster>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OpenShiftManagedCluster>, callback?: msRest.ServiceCallback<Models.OpenShiftManagedCluster>): Promise<Models.OpenShiftManagedClustersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OpenShiftManagedClustersGetResponse>;
  }

  /**
   * Creates or updates a OpenShift managed cluster with the specified configuration for agents and
   * OpenShift version.
   * @summary Creates or updates an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param parameters Parameters supplied to the Create or Update an OpenShift Managed Cluster
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.OpenShiftManagedCluster, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OpenShiftManagedClustersCreateOrUpdateResponse>;
  }

  /**
   * Updates an OpenShift managed cluster with the specified tags.
   * @summary Updates tags on an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param parameters Parameters supplied to the Update OpenShift Managed Cluster Tags operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, resourceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,resourceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.OpenShiftManagedClustersUpdateTagsResponse>;
  }

  /**
   * Deletes the OpenShift managed cluster with a specified resource group and name.
   * @summary Deletes an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,resourceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a OpenShift managed cluster with the specified configuration for agents and
   * OpenShift version.
   * @summary Creates or updates an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param parameters Parameters supplied to the Create or Update an OpenShift Managed Cluster
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, resourceName: string, parameters: Models.OpenShiftManagedCluster, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates an OpenShift managed cluster with the specified tags.
   * @summary Updates tags on an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param parameters Parameters supplied to the Update OpenShift Managed Cluster Tags operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, resourceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Deletes the OpenShift managed cluster with a specified resource group and name.
   * @summary Deletes an OpenShift managed cluster.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the OpenShift managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of OpenShift managed clusters in the specified subscription. The operation returns
   * properties of each OpenShift managed cluster.
   * @summary Gets a list of OpenShift managed clusters in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): Promise<Models.OpenShiftManagedClustersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OpenShiftManagedClustersListNextResponse>;
  }

  /**
   * Lists OpenShift managed clusters in the specified subscription and resource group. The operation
   * returns properties of each OpenShift managed cluster.
   * @summary Lists OpenShift managed clusters in the specified subscription and resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OpenShiftManagedClustersListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OpenShiftManagedClustersListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>, callback?: msRest.ServiceCallback<Models.OpenShiftManagedClusterListResult>): Promise<Models.OpenShiftManagedClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.OpenShiftManagedClustersListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/openShiftManagedClusters",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.OpenShiftManagedCluster,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedCluster
    },
    201: {
      bodyMapper: Mappers.OpenShiftManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedCluster
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/openShiftManagedClusters/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.resourceName0
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OpenShiftManagedClusterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
