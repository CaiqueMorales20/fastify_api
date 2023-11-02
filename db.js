// Imports
import 'dotenv/config'
import postgres from 'postgres'

// Variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID} = process.env
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

// SQL
const sql = postgres(URL, {ssl: 'require'}) // will use psql environment variables

// Export
export default sql