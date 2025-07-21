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
                    args: ['--disable-blink-features=Autofill'],
                    prefs: {
                        "download.default_directory": downloadDir,
                        'intl.accept_languages': 'en,en_US'
                    }
                },
                ...(browserName === "edge" && {
                    "ms:edgeOptions": {
                        args: ['--disable-blink-features=Autofill'],
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
