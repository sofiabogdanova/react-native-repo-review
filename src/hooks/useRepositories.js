import {useQuery} from "@apollo/client";
import {GET_REPOSITORIES} from "../graphql/queries";

const useRepositories = () => {
    const result = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const repositories = result && result.data && result.data.repositories
        ? result.data.repositories
        : {edges: []}
    return {repositories};
};

export default useRepositories;