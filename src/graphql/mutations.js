/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
