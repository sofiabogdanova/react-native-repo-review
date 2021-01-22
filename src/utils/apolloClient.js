import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        console.log(`ACCESS TOKEN ${accessToken}`)
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    uri: Constants.manifest.extra.apolloUri,
  });
};

// const createApolloClient = () => {
//   return new ApolloClient({
//     uri: Constants.manifest.extra.apolloUri,
//   });
// };

export default createApolloClient;