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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { DataBoxManagementClientContext } from "./dataBoxManagementClientContext";


class DataBoxManagementClient extends DataBoxManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  jobs: operations.Jobs;
  service: operations.Service;

  /**
   * Initializes a new instance of the DataBoxManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Subscription Id
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DataBoxManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.jobs = new operations.Jobs(this);
    this.service = new operations.Service(this);
  }
}

// Operation Specifications

export {
  DataBoxManagementClient,
  DataBoxManagementClientContext,
  Models as DataBoxManagementModels,
  Mappers as DataBoxManagementMappers
};
export * from "./operations";
