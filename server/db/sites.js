const client = require('./client')

async function createSite({creator,name,description,link,githublink,image}){
    try{
        const {rows: [site]}= await client.query(`
        INSERT INTO sites(
            creator,
            name,
            description,
            link,
            githublink,
            image
        )
        VALUES ($1,$2,$3,$4,$5,$6)
        RETURNING *
        `,[creator,name,description,link,githublink,image])
        return site
    }
    catch(error){
        throw error
    }
}

module.exports = {
    createSite
}