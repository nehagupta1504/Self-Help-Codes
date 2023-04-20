const __filename = fileURLToPath(import.meta.url);
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const logsTenant = {
    pp: "PP",
    prod: "prod-second-dump-2",
    test: "test",
};
const logFileSuccess = path.join(
    path.dirname(__filename),
    `./logs/success_beta.txt`
);
const logFileFailure = path.join(
    path.dirname(__filename),
    `./logs/failure_beta.txt`
);

export const logType = {
    failure: "error",
    success: "success",
};

export const addingLogs = (type, logMessage, filename = {}) => {
    switch (type) {
        case logType.success:
            fs.appendFileSync(logFileSuccess, `${logMessage}\n`);
            break;
        case logType.failure:
            fs.appendFileSync(logFileFailure, `${logMessage}\n`);
            break;
        default:
            console.log("default case working");
            fs.appendFileSync(filename, logMessage);
    }
};
