import chalk, {
    BackgroundColorName,
    ColorName,
    ModifierName,
    modifierNames,
} from "chalk";
// import { Animation, rainbow } from "chalk-animation";

const log = console.log;

export enum LogLevel {
    // debug,
    info,
    log,
    warn,
    error,
}

export const logText = (
    text: string,
    textColor: ColorName,
    bgColor: BackgroundColorName,
    modifier?: ModifierName
) => {
    log(chalk[textColor][bgColor](text));
};

export const Log = (text: string, level: LogLevel) => {
    switch (level) {
        // case LogLevel.debug:
        //     logText(logText, );
        //     break;
        case LogLevel.info:
            logText(text, 'white', 'bgCyanBright');
            break;
        case LogLevel.log:
            logText(text, 'white', 'bgBlack');
            break;
        case LogLevel.warn:
            logText(text, 'redBright', 'bgBlack');
            break;
        case LogLevel.error:
            logText(text, 'red', 'bgBlack');
            break;
    }
};

const main = () => {
    Log('LOG', LogLevel.log);
    Log('INFO', LogLevel.info);
    Log('WARN', LogLevel.warn);
    Log('ERROR', LogLevel.error);
};

main();
