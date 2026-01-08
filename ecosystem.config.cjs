module.exports = {
    apps: [
        {
            name: 'latifalar-bot-9999',
            script: 'dist/main.js',
            env: {
                PORT: 9999,
                BASE_URL: 'http://213.230.110.176:9999',
                // Qolgan env variablelar .env dan olinadi
            }
        },
        {
            name: 'latifalar-bot-8989',
            script: 'dist/main.js',
            env: {
                PORT: 8989,
                BASE_URL: 'http://213.230.110.176:8989',
                // Qolgan env variablelar .env dan olinadi
            }
        },
        {
            name: 'multi-bot-8989',
            script: 'dist/multi.js',
            env: {
                PORT: 8989,
                BASE_URL: 'http://213.230.110.176:8989',
                // .env dan BOTS/DEFAULT_BOT_KEY o'qiladi
            }
        },
        {
            name: 'multi-bot-9999',
            script: 'dist/multi.js',
            env: {
                PORT: 9999,
                BASE_URL: 'http://213.230.110.176:9999',
                // .env dan BOTS/DEFAULT_BOT_KEY o'qiladi
            }
        }
    ]
};
