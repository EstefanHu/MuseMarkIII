const graphql = require('graphql');
const City = require('../models/city');
const District = require('../models/district');
const Neighborhood = require('../models/neighborhood');
const Hub = require('../models/hub');
const User = require('../models/user');
const Post = require('../models/post');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const CityType = new GraphQLObjectType({
    name: 'City',

    fields: () => ({
        id: {type: GraphQLId},
        name: {type: GraphQLString}
    })
});

const DistrictType = new GraphQLObjectType({
    name: 'District',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});

const NeighborhoodType = new GraphQLObjectType({
    name: 'Neighborhood',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});

const HubType = new GraphQLObjectType({
    name: 'Hub',

    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString}
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',

    fields: () => ({
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        content: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        post: {
            type: PostType,
            args: {id: {type: GraphQLID}},
            resolve(parents, args) {
                return Post.findById(args.id);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let user = new User({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                });
                return user.save();
            }
        },
        addPost: {
            type: PostType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let post = new Post({
                    title: args.title,
                    description: args.description,
                    content: args.content,
                    userId: args.userId
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});