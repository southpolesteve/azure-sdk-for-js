/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Container host mapping object specifying the Container host resource ID and its associated
 * Controller resource.
 */
export interface ContainerHostMapping {
  /**
   * ARM ID of the Container Host resource
   */
  containerHostResourceId?: string;
  /**
   * ARM ID of the mapped Controller resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly mappedControllerResourceId?: string;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource.
 */
export interface TrackedResource extends Resource {
  /**
   * Tags for the Azure resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Region where the Azure resource is located.
   */
  location?: string;
}

/**
 * An interface representing ResourceProviderOperationDisplay.
 */
export interface ResourceProviderOperationDisplay {
  /**
   * Name of the resource provider.
   */
  provider?: string;
  /**
   * Name of the resource type.
   */
  resource?: string;
  /**
   * Name of the resource provider operation.
   */
  operation?: string;
  /**
   * Description of the resource provider operation.
   */
  description?: string;
}

/**
 * An interface representing ResourceProviderOperationDefinition.
 */
export interface ResourceProviderOperationDefinition {
  /**
   * Resource provider operation name.
   */
  name?: string;
  display?: ResourceProviderOperationDisplay;
}

/**
 * Model representing SKU for Azure Dev Spaces Controller.
 */
export interface Sku {
  /**
   * The tier of the SKU for Azure Dev Spaces Controller. Possible values include: 'Standard'
   */
  tier?: SkuTier;
}

/**
 * An interface representing Controller.
 */
export interface Controller extends TrackedResource {
  /**
   * Provisioning state of the Azure Dev Spaces Controller. Possible values include: 'Succeeded',
   * 'Failed', 'Canceled', 'Updating', 'Creating', 'Deleting', 'Deleted'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hostSuffix?: string;
  /**
   * DNS name for accessing DataPlane services
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly dataPlaneFqdn?: string;
  /**
   * Resource ID of the target container host
   */
  targetContainerHostResourceId: string;
  /**
   * Credentials of the target container host (base64).
   */
  targetContainerHostCredentialsBase64: string;
  sku: Sku;
}

/**
 * Parameters for updating an Azure Dev Spaces Controller.
 */
export interface ControllerUpdateParameters {
  /**
   * Tags for the Azure Dev Spaces Controller.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Credentials of the target container host (base64).
   */
  targetContainerHostCredentialsBase64?: string;
}

/**
 * Parameters for listing connection details of an Azure Dev Spaces Controller.
 */
export interface ListConnectionDetailsParameters {
  /**
   * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
   */
  targetContainerHostResourceId: string;
}

/**
 * Contains the possible cases for OrchestratorSpecificConnectionDetails.
 */
export type OrchestratorSpecificConnectionDetailsUnion = OrchestratorSpecificConnectionDetails | KubernetesConnectionDetails;

/**
 * Base class for types that supply values used to connect to container orchestrators
 */
export interface OrchestratorSpecificConnectionDetails {
  /**
   * Polymorphic Discriminator
   */
  instanceType: "OrchestratorSpecificConnectionDetails";
}

/**
 * An interface representing ControllerConnectionDetails.
 */
export interface ControllerConnectionDetails {
  orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetailsUnion;
}

/**
 * An interface representing ControllerConnectionDetailsList.
 */
export interface ControllerConnectionDetailsList {
  /**
   * List of Azure Dev Spaces Controller connection details.
   */
  connectionDetailsList?: ControllerConnectionDetails[];
}

/**
 * Contains information used to connect to a Kubernetes cluster
 */
export interface KubernetesConnectionDetails {
  /**
   * Polymorphic Discriminator
   */
  instanceType: "Kubernetes";
  /**
   * Gets the kubeconfig for the cluster.
   */
  kubeConfig?: string;
}

/**
 * An interface representing ErrorDetails.
 */
export interface ErrorDetails {
  /**
   * Status code for the error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * Error message describing the error in detail.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
}

/**
 * Error response indicates that the service is not able to process the incoming request. The
 * reason is provided in the error message.
 */
export interface DevSpacesErrorResponse {
  /**
   * The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * An interface representing DevSpacesManagementClientOptions.
 */
export interface DevSpacesManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * An interface representing the ResourceProviderOperationList.
 * @extends Array<ResourceProviderOperationDefinition>
 */
export interface ResourceProviderOperationList extends Array<ResourceProviderOperationDefinition> {
  /**
   * The URI that can be used to request the next page for list of Azure operations.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ControllerList.
 * @extends Array<Controller>
 */
export interface ControllerList extends Array<Controller> {
  /**
   * The URI that can be used to request the next page for list of Azure Dev Spaces Controllers.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Updating', 'Creating', 'Deleting',
 * 'Deleted'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Succeeded' | 'Failed' | 'Canceled' | 'Updating' | 'Creating' | 'Deleting' | 'Deleted';

/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Standard';

/**
 * Contains response data for the getContainerHostMapping operation.
 */
export type ContainerHostMappingsGetContainerHostMappingResponse = ContainerHostMapping & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ContainerHostMapping;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = ResourceProviderOperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceProviderOperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = ResourceProviderOperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceProviderOperationList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ControllersGetResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ControllersCreateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ControllersUpdateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ControllersListByResourceGroupResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ControllersListResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the listConnectionDetails operation.
 */
export type ControllersListConnectionDetailsResponse = ControllerConnectionDetailsList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerConnectionDetailsList;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ControllersBeginCreateResponse = Controller & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Controller;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ControllersListByResourceGroupNextResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ControllersListNextResponse = ControllerList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ControllerList;
    };
};
