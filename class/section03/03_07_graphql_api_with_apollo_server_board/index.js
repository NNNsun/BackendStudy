import { ApolloServer } from "@apollo/server" // == express
import { startStandaloneServer } from '@apollo/server/standalone' // == listen()

// docs
const typeDefs = `# graphql
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type MyResult {
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        # fetchBoards: MyResult  #객체 1개를 의미!
        fetchBoards: [MyResult]  #배열 안에 객체 1개 이상을 의미!
    }
    type Mutation {
        # createBoard(writer: String, title: String, contents: String): String
        createBoard(createBoardInput: CreateBoardInput!): String
    }
`

/**
 * arg: data
 * context: req, res
 * info: 기타 정보
 * parent: back -> back 요청
 * 
 */
const resolvers = {
    Query: {
        fetchBoards: (parent, args, context, info) => {
            const result = [
                { number: 1, writer: "철수", title: "철수입니다~", contents: "철수예요!!!" },
                { number: 2, writer: "짱구", title: "짱구입니다~", contents: "짱구예요!!!" },
                { number: 3, writer: "맹구", title: "맹구입니다~", contents:"맹구예요!!!"},
            ]
            return result
        }
    },
    Mutation: {
        createBoard: (_, args) => {
            console.log(args.createBoardInput.writer)
            console.log(args.createBoardInput.title)
            console.log(args.createBoardInput.contents)

            return "게시물 등록에 성공하였습니다."
        }
    }

}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: true,
});

startStandaloneServer(server); // Default Port Number: 4000
