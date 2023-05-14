import { ApolloServer } from "@apollo/server" // == express
import { startStandaloneServer } from '@apollo/server/standalone' // == listen()

// docs
const typeDefs = ` #graphql
    type Query{
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "Hello GraphQL"
        }
    },
}



const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true, // 모든 사이트 허용
    // cors: {origin: "https://naver.com", "https://daum.net"} // 특정 사이트만 허용
});

startStandaloneServer(server); // Default Port Number: 4000
