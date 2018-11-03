module.exports = (app) => {

    return async ({ query: { q } }) => {
        return app.integrations.iconfinder.search(q);
    }
}