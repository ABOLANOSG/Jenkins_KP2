import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

const browserName = process.env.BROWSER || "chrome"

export const config = {
    ...mainConfig,
    ...{
        specs: [
            '../test/specs/**/*.js'
        ],
        capabilities: [
            {
                browserName: browserName,
                browserVersion: '126.0.6478.127',
                "goog:chromeOptions": {
                    args: [
                        '--headless',
                        '--disable-gpu',
                        '--disable-blink-features=Autofill',
                        '--window-size=1920,1080'
                    ],
                    prefs: {
                        "download.default_directory": downloadDir,
                        'intl.accept_languages': 'en,en_US'
                    }
                },
                ...(browserName === "edge" && {
                    "ms:edgeOptions": {
                        args: ['--disable-blink-features=Autofill',
                            '--headless',
                            '--disable-gpu',
                        ],
                        prefs: {
                            "download.default_directory": downloadDir,
                            'intl.accept_languages': 'en,en_US'
                        }
                    }
                })
            },
        ],
    },
};
