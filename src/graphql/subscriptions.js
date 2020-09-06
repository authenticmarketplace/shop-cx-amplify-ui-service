/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
