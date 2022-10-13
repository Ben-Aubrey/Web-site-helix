const express = require('express')
const router = express.Router()
const services = require('../services/database');

router.get('/', async(req, res) => {   // root route or home route
    try {
        const data1 = await services.getDB().collection('index').find({}).toArray({})  // find some documents
        // const data  = {data1}
        res.render('index', {  // use res.render to load up an ejs view file
            title: 'Home', data : data1
        });
    } catch (error) {
        // res.status(500).send({message: error.message || 'Error Occurred'});
    }
});

router.get('/about', async(req, res) => {  // about page
    // try {
    //     const about = await services.getDB().collection('footer').find({}).toArray({})  // find some documents
    //     const aboutl = await services.getDB().collection('foot').find({}).toArray({})  // find some documents
    //     const data = {about, aboutl}
    //     // use res.render to load up an ejs view file
    // } catch (error) {
    //     // res.status(500).send({message: error.message || 'Error Occurred'});
    // }   
    res.render('about', {
        title: 'About', 
    })
})            
           
router.get('/nutrition', async(req, res) => {   // campus page
    res.render('nutrition', {
        title: 'Nutrition'
    }) 
})            
           
router.get('/contact_us', async(req, res) => {   // contact page
    res.render('contact_us', {
        title: 'Contact Us'
    }) 
})            
           
router.get('/gallery', async(req, res) => {   // gallery page
    res.render('gallery', {
        title: 'Gallery'
    }) 
})            

module.exports = router
