

const WEB_SERVER = require("express").Router();

// INJECT THE WEB PAGES
WEB_SERVER.get("/", (req, res) => {
    return res.render("pages/index", {
        pageTitle: "Home",
        pageName: "Home",
        pageDescription: "Welcome to home page",
    });
});

// INJECT THE WEB PAGES
WEB_SERVER.get("/about", (req, res) => {
    return res.render("pages/index", {
        pageTitle: "About",
        pageName: "About",
        pageDescription: "Welcome to About page",
    });
});


// INJECT THE WEB PAGES
WEB_SERVER.get("/login", async (req, res) => {
    try {
        return res.render("pages/login", {
            pageTitle: "Login",
            pageName: "Login",
            pageDescription: "Login to your account",
        });
    } catch (error) { }
});

// INJECT THE WEB PAGES
WEB_SERVER.get("/signup", async (req, res) => {
    try {
        return res.render("pages/admin-registration", {
            pageTitle: "Create Account",
            pageName: "Create Account",
            pageDescription: "Create Account to start booking",
        });
    } catch (error) { }
});

module.exports = WEB_SERVER;
