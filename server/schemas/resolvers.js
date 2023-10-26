const { User, Articles, Category } = require('../models');
const { signToken, authMiddleware } = require('../utils/authmiddleware');
const { AuthenticationError } = require('apollo-server');

const resolvers = {
    Query: {
        articles: async(parent, { category }) => {
            try {
                const categoryArticles = await Articles.find({ category });

                await Articles.populate(categoryArticles, 'author');

                const categoryArticlesList = categoryArticles.map((article) => ({
                    title: article.title,
                    author: article.author.user,
                    publicationDate: article.publicationDate,
                    isFact: article.isFact,
                    isOpinion: article.isOpinion,
                }));

                return categoryArticlesList;
            } catch (err) {
                throw new Error('Failed to fetch articles.');
            }
        },

        article: async(parent, { title }) => {
            try {
                const singleArticle = await Articles.findOne({ title });

                await Articles.populate(singleArticle, 'author');

                return singleArticle;
            } catch (err) {
                throw new Error('Failed to fetch article');
            }
        },
    },

    Mutation: {
        addUser: async (parent, { firstName, lastNAme, userName, email, password, dOfb, profilePicture }) => {
            try {
                const newUser = await User.create({ firstName, lastNAme, userName, email, password, dOfb, profilePicture });
            } catch (err) {
                throw new Error('Failed to sign up.');
            }
        },
    }
};

module.exports = resolvers;