import { API } from 'aws-amplify';
import { byIdentityOrientation, getProduct, listBrands } from '../../../graphql/queries.js';

export const requestProduct = async (id, dispatch) => {
    try {
      const productData = await API.graphql({
        query: getProduct,
        variables: { productID: id }
      })
      dispatch({ type: 'SET_ITEM', item: productData.data.getProduct })
    }
    catch(err) {
      console.log(err)
    }
}

export const requestMoreProducts = async (item, setMoreProducts) => {
    try {
      const productData = await API.graphql({
        query: byIdentityOrientation,
        variables: { identityOrientation: item.identityOrientation, limit: 4 }
      })
      setMoreProducts(productData.data.byIdentityOrientation.items);
    }
    catch(err) {
      console.log(err);
    }
}

export const requestProductsByBrand = async (item, setMoreByBrand) => {
    try {
        const productData = await API.graphql({
        query: listBrands,
        variables: { brandID: item.brand.brandID, limit: 4 }
        })
        setMoreByBrand(productData.data.listBrands.items[0].products.items);
    }
    catch(err) {
        console.log(err);
    }
}

export const addProductToBag = (item, addItem, ref) => {
    const product = { name: item.name,
        description: item.brand.displayName,
        sku: item.productID,
        price: item.price,
        currency: 'USD',
        image: item.images[0],
    }
    addItem(product)
    ref.current(`${item.name} from ${item.brand.displayName} has been added to your order`)
}