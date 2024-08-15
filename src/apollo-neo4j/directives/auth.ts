// Custom directive implementation

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