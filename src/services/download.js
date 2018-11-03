module.exports = (app) => {

    return async ({ query: { url, integrator } }) => {
        if (!url) { throw `Query param 'url' don't found.` }
        if (!integrator) { throw  `Query param 'integrator' don't found.` }
        if (!app.integrations[integrator]) { throw `'integrator' don't exist.` }

        let svgContent = await app.integrations[integrator].download(url);
        return await app.utils.svg.optimize(svgContent);
    }
}