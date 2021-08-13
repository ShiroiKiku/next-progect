const {Router} = require('express')
const router = Router()

const routersTitle = ['about']

router.get('/', (req, res) =>{
    res.render('index',{
        title:'title'
    })
})
for (let index = 0; index < routersTitle.length; index++) {
    router.get('/'+routersTitle[index], (req, res) =>{
        res.render(routersTitle[index],{
            title:routersTitle[index]
        })
    })
}

module.exports = router