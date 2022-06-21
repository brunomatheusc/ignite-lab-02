import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9dm0g1acf01z7gums4h9s/master',
    cache: new InMemoryCache()
});