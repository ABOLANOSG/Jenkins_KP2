import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";


export const config = {
    ...mainConfig,
    ...{
        specs: [
            '../test/specs/**/*.js'
        ],
        capabilities: [
            {
                browserName: "chrome",
                browserVersion: '126.0.6478.127',
                "goog:chromeOptions": {
                    args: ['--disable-blink-features=Autofill'],
                    prefs: {
                        "download.default_directory": downloadDir,
                        'intl.accept_languages': 'en,en_US'
                    }
                },
            },
        ],
    },
};
