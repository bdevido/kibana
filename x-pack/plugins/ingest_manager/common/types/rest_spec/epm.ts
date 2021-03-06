/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  AssetReference,
  CategorySummaryList,
  Installable,
  RegistryPackage,
  PackageInfo,
} from '../models/epm';

export interface GetCategoriesRequest {
  query: {
    experimental?: boolean;
  };
}

export interface GetCategoriesResponse {
  response: CategorySummaryList;
}

export interface GetPackagesRequest {
  query: {
    category?: string;
    experimental?: boolean;
  };
}

export interface GetPackagesResponse {
  response: Array<
    Installable<
      Pick<
        RegistryPackage,
        'name' | 'title' | 'version' | 'description' | 'type' | 'icons' | 'download' | 'path'
      >
    >
  >;
}

export interface GetLimitedPackagesResponse {
  response: string[];
}

export interface GetFileRequest {
  params: {
    pkgkey: string;
    filePath: string;
  };
}

export interface GetInfoRequest {
  params: {
    pkgkey: string;
  };
}

export interface GetInfoResponse {
  response: PackageInfo;
}

export interface InstallPackageRequest {
  params: {
    pkgkey: string;
  };
}

export interface InstallPackageResponse {
  response: AssetReference[];
}

export interface MessageResponse {
  response: string;
}

export interface DeletePackageRequest {
  params: {
    pkgkey: string;
  };
}

export interface DeletePackageResponse {
  response: AssetReference[];
}
