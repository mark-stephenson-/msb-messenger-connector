/** Config */
var dotenv = require("dotenv");
dotenv.load();

module.exports = {
    FB_PAGE_TOKEN:    process.env.FB_PAGE_TOKEN,
    FB_PAGE_ID:       process.env.FB_PAGE_ID,
    FB_VERIFY_TOKEN:  process.env.FB_VERIFY_TOKEN,
    WIT_TOKEN:        process.env.WIT_TOKEN ,
    PORT:             process.env.PORT
};
