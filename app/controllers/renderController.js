const renderController = {
    homePage: (__, res) => {
        res.render('home', { home: true });
    },

    aboutPage: (__, res) => {
        res.render('about', { home: false });
    },

    projectsPage: (__, res) => {
        res.render('projects', { home: false });
    },

    contactPage: (__, res) => {
        res.render('contact', { home: false });
    }
}

module.exports = renderController;