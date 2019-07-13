import axios from 'axios';

const url = 'https://pure-fjord-88379.herokuapp.com/products';

export const addProduct = (token,category,price,images,city,description,name,stok, brand) => {
    var data = new FormData();
    data.append('images',{
        uri:images.uri, 
        name:images.fileName,
        type:'image/jpg'
    });
    data.append('name',name);
    data.append('description',description);
    data.append('city',city);
    data.append('price',price);
    data.append('category',category);
    data.append('stok', stok);
    data.append('brand', brand);

   return {
       type: 'POST_PRODUCT',
       payload: axios.post(url, data, {
           headers: {
               'x-auth-token': token
           }
       })
   }
}

export const fetchProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios.get(`${url}`)
    }
}

export const fetchProductsByUser = (token) => {
    return {
        type: 'GET_PRODUCTS_BYUSER',
        payload: axios.get(`${url}/user`, {
          headers: {
               'x-auth-token': token
           }
        })
    }
}