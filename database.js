// подключение бд
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"site_sar",
    password:"Kucx3aqjLM7jNB64"
})
conn.connect( err => {
    if(err) console.log(err)
    else console.log('database OK')
})
let query = "SELECT * FROM menu" 


conn.query(query,(err,result)=>{
    console.log(err)
    console.log(result)
})
conn.end( err => {
    if(err) console.log(err)
    else console.log('database end')
})