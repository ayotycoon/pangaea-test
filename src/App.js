import logo from './logo.svg';
import './App.scss';
import AllProducts from './components/pages/AllProducts/AllProducts';
import CartModal from './components/misc/CartModal/CartModal';
import Layout from './components/misc/Layout/Layout';

import {ApolloProvider} from 'react-apollo';
import { Provider, store } from './store';
import { apolloClient } from './Providers/misc';



function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <CartModal />
        <Layout>
          <AllProducts />
        </Layout>

      </Provider>
    </ApolloProvider>
  );
}

export default App;
