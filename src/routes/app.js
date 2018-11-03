

module.exports = (app) => {


    app.route('/search')
        .get(async (req, res) => {
            try {
                return res.status(200).json( await app.services.search(req));
            } catch (e) { return res.status(500).json({err: e}) }
        })

    app.route('/download')
        .get(async (req, res) => {
            try {
                return res.status(200).send(await app.services.download(req));
            } catch (e) { return res.status(500).json({err: e}) }
        })

}