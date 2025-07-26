import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

//const browserName = process.env.BROWSER;

export const config = {
    ...mainConfig,
    ...{
        specs: [
            '../test/specs/**/*.js'
        ],
        capabilities: [
            {
                    browserName: "msedgedriver",
                    "ms:edgeOptions": {
                        args: [
                            
                            '--disable-gpu',
                            '--disable-blink-features=Autofill',
                            '--window-size=1920,1080'
                        ],
                        prefs: {
                            "download.default_directory": downloadDir,
                            'intl.accept_languages': 'en,en_US'
                        }
                    }
                }
        ],
    },
};
