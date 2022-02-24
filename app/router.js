const express = require('express');
const router = express.Router();

const renderController = require('./controllers/renderController.js');

router.get('/', renderController.homePage);
router.get('/about', renderController.aboutPage);
router.get('/projects', renderController.projectsPage);
router.get('/contact', renderController.contactPage);

module.exports = router;