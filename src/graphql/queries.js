/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($productID: ID!) {
    getProduct(productID: $productID) {
      productID
      name
      price
      productCaption
      additionalDetails
      images
      category
      identityOrientation
      inventory
      brandID
      brand {
        brandID
        displayName
        locale
        designation
        bio
        logo
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $productID: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      productID: $productID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        productID
        name
        price
        productCaption
        additionalDetails
        images
        category
        identityOrientation
        inventory
        brandID
        brand {
          brandID
          displayName
          locale
          designation
          bio
          logo
          createdAt
          updatedAt
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($brandID: ID!) {
    getBrand(brandID: $brandID) {
      brandID
      displayName
      locale
      designation
      bio
      logo
      products {
        items {
          productID
          name
          price
          productCaption
          additionalDetails
          images
          category
          identityOrientation
          inventory
          brandID
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $brandID: ID
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBrands(
      brandID: $brandID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        brandID
        displayName
        locale
        designation
        bio
        logo
        products {
          items {
            images
            name
            productID
            brand {
              displayName
            }
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byPrice = /* GraphQL */ `
  query ByPrice(
    $baseType: String
    $price: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byPrice(
      baseType: $baseType
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        name
        price
        productCaption
        additionalDetails
        images
        category
        identityOrientation
        inventory
        brandID
        brand {
          brandID
          displayName
          locale
          designation
          bio
          logo
          createdAt
          updatedAt
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byIdentityOrientation = /* GraphQL */ `
  query ByIdentityOrientation(
    $identityOrientation: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byIdentityOrientation(
      identityOrientation: $identityOrientation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        name
        price
        productCaption
        additionalDetails
        images
        category
        identityOrientation
        inventory
        brandID
        brand {
          brandID
          displayName
          locale
          designation
          bio
          logo
          createdAt
          updatedAt
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byIdentityOrientationByCategory = /* GraphQL */ `
  query ByIdentityOrientationByCategory(
    $identityOrientation: String
    $category: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byIdentityOrientationByCategory(
      identityOrientation: $identityOrientation
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        name
        price
        productCaption
        additionalDetails
        images
        category
        identityOrientation
        inventory
        brandID
        brand {
          brandID
          displayName
          locale
          designation
          bio
          logo
          createdAt
          updatedAt
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byCategoryByPrice = /* GraphQL */ `
  query ByCategoryByPrice(
    $category: String
    $price: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byCategoryByPrice(
      category: $category
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        name
        price
        productCaption
        additionalDetails
        images
        category
        identityOrientation
        inventory
        brandID
        brand {
          brandID
          displayName
          locale
          designation
          bio
          logo
          createdAt
          updatedAt
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byLocale = /* GraphQL */ `
  query ByLocale(
    $locale: String
    $sortDirection: ModelSortDirection
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byLocale(
      locale: $locale
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        brandID
        displayName
        locale
        designation
        bio
        logo
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byDesignation = /* GraphQL */ `
  query ByDesignation(
    $designation: String
    $sortDirection: ModelSortDirection
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byDesignation(
      designation: $designation
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        brandID
        displayName
        locale
        designation
        bio
        logo
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
