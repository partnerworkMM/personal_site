const {createSite}=require('./')

const client = require('./client')

async function dropTables(){
    console.log('dropping all tables...')

    try{
        await client.query(`
        DROP TABLE IF EXISTS sites
        `)
    }
    catch (error) {
        throw error
    }
}
async function createTables(){
    try{
        console.log('create tables...')
        await client.query(`
        CREATE TABLE sites(
            siteid SERIAL PRIMARY KEY,
            creator VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            link TEXT,
            githublink TEXT,
            image TEXT
        );
        `)
    }
    catch(error){
        console.error('error creating tables')
        throw error
    }
}

async function createSites(){
    console.log('create initial sites...')
    try{
        const sitesToCreate = [
            {creator: 'mason', name: 'herbal',description: 'its herba;',link: 'testlink',githublink: 'testlink github',image:'',},
            {creator: 'mikaela', name: '',description: '',link: '',githublink: '',image:'',}
        ]
        const sites = await Promise.all(sitesToCreate.map(createSite))
        console.log("sites created: ")
        console.log(sites)
        console.log("finished creating sites")
    }
    catch (error){
        throw error
    }
}

async function rebuildDB(){
    try{
        client.connect()
        await dropTables()
        await createTables()
        await createSites()
    }
    catch(error){
        console.log("error during rebuildDB")
        throw error
    }
}

module.exports = {rebuildDB}