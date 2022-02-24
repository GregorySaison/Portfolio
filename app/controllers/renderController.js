const renderController = {
    homePage: (__, res) => {
        res.render('home', { 
            home: true,
            about: false,
            projects: false,
            contact: false 
        });
    },

    aboutPage: (__, res) => {
        res.render('about', { 
            home: false,
            about: true,
            projects: false,
            contact: false 
        });
    },

    projectsPage: (__, res) => {
        res.render('projects', { 
            home: false,
            about: false,
            projects: true,
            contact: false 
        });
    },

    contactPage: (__, res) => {
        res.render('contact', { 
            home: false,
            about: false,
            projects: false,
            contact: true 
        });
    }
}

module.exports = renderController;