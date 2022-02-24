const renderController = {
    homePage: (__, res) => {
        res.render('home');
    },

    aboutPage: (__, res) => {
        res.render('about');
    },

    projectsPage: (__, res) => {
        res.render('projects');
    },

    contactPage: (__, res) => {
        res.render('contact');
    }
}

module.exports = renderController;