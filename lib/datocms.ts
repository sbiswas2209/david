import { GraphQLClient } from "graphql-request";
export function request(query: string) {
    const endpoint = "https://graphql.datocms.com/"
    const client = new GraphQLClient(endpoint, 
        {headers: {
            "Authorization": process.env.NEXT_DATO_CMS_TOKEN_READ_ONLY
        }})
    return client.request(query)
}