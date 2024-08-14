// Custom directive implementation
import {GraphQLError} from "graphql/error/index.js";

// const authDirective = (next, source, args, context, info) => {
//     if (!context.memberId) {
//         throw new GraphQLError('User is not authenticated', {
//             extensions: {
//                 code: 'UNAUTHENTICATED',
//                 http: { status: 401 },
//             },
//         });
//     }
//     return next();
// };