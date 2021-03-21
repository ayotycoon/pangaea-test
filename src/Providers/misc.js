import ApolloClient from 'apollo-boost';
import  gql from 'graphql-tag';

export const currencyFormatter = (price) => {

    if (typeof price == 'string') {
        price = parseFloat(price)
    }
    return  (price || 0).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export const apolloClient = new ApolloClient({
    uri: "https://pangaea-interviews.now.sh/api/graphql"
  })



  export function getProducts(currency = "USD"){
     return  apolloClient.query({ query: gql`
      query {
          
              products{
                id,
                image_url,
                title,
                price(currency:${currency}),
                
              }
            
      }
      
      ` }).then((response) => response.data.products)

  }
