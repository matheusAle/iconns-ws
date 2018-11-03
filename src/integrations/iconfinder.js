const Request = require('request');

class IconFinder {

    constructor(app) {
        this._app = app;
        this._CLIENT_ID = process.env.ICON_FINDER_CLIENT_ID.trim()
        this._CLIENT_SECRET = process.env.ICON_FINDER_CLIENT_SECRET.trim()
        this._baseUrl = 'https://api.iconfinder.com/v3/'
    }

    async search(query) {
        let res = await this._get(`${this._baseUrl}icons/search?query=${query}&vector=true&premium=false`)
        try {
            res = JSON.parse(res);
            return [...res.icons]
                .map(({ vector_sizes: vector, raster_sizes: img }) => 
                    ({ 
                        download_url: this._getUrlForDownload(vector[0].formats[0].download_url), 
                        preview_url: (img.filter(({ size }) => size >= 24)[0] || img[0]).formats[0].preview_url
                    }))    
        } catch (e) {
            console.log({err: e, res})
            return [];
        }
            
    }

    async download(url) {
        return this._get(`${this._baseUrl}${url}?`);
    }

    _getUrlForDownload(url) {
        return `/download?url=${url}&integrator=iconfinder`
    }

    _get(url) {
        return new Promise((resolve, reject) => {
            url = `${url}&client_id=${this._CLIENT_ID}&client_secret=${this._CLIENT_SECRET}`
            Request.get(url, (err, res, body) => {
                if (err) return reject(err);
                resolve(body);
            })
        })
    }
}

module.exports = (app) => new IconFinder(app);
