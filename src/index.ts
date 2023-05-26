import chalk from "chalk";
import { getFlags } from "./get-flags.js";
const log = console.log;

const main = async () => {
  // ? Default first = absolute path and default second = relative path which are not needed thus omitted.
  try {
    const flags = await getFlags();
    console.log("These are your flags", flags);
  } catch (error) {
    console.error(chalk.bgRed(error));
  }
};
//sdf
main();
