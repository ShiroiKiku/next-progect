const {Router} = require('express')
const router = Router()


router.get('/', (req, res) =>{
    res.render(__filename,{
        title:'__filename'
    })
})
// router.get('/about', (req, res) =>{
//     res.render('about',{
//         title:'about'
//     })
// })

module.exports = router