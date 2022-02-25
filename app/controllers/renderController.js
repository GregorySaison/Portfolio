const renderController = {
    homePage: (__, res) => {
        res.render('home', { cssSheets: [
            'normalize',
            'styles',
            'home',
            'http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome'
        ] });
    },

    aboutPage: (__, res) => {
        res.render('about', { cssSheets: [
            'normalize',
            'styles',
            'about',
        ] });
    },

    projectsPage: (__, res) => {
        res.render('projects', { cssSheets: [
            'normalize',
            'styles',
            'projects',
        ] });
    },

    contactPage: (__, res) => {
        res.render('contact', { cssSheets: [
            'normalize.css',
            'styles.css',
            'contact.css',
        ] });
    }
}

module.exports = renderController;