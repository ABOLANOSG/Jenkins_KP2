import path from 'node:path';
import fs from 'fs-extra';
import dotenv from 'dotenv';
import * as os from "os";

//Load environment variables from .env file
dotenv.config();

export const downloadDir = path.resolve('./tmp');



export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    baseUrl: 'https://www.paradoxinteractive.com/our-games/discover',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                reportedEnvironmentVars: {
                      os_platform: os.platform(),
                      os_release: os.release(),
                      os_version: os.version(),
                      node_version: process.version
                    }
            },
            
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    beforeTest: async function () {
        await browser.url(mainConfig.baseUrl);

    },

    onPrepare: function() {
        fs.ensureDir(downloadDir);
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

}
