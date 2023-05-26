import { ACCEPTABLE_FLAGS } from "./config/accept-flags.js";

export const getFlags = async () => {
  const allFlags = process.argv.slice(2) as unknown as typeof ACCEPTABLE_FLAGS;
  let isAcceptable = true;

  for (const flag of allFlags) {
    if (!ACCEPTABLE_FLAGS.includes(flag)) {
      isAcceptable = false;
      break;
    }
  }

  if (!isAcceptable) {
    const unknowns = getUnknownFlags(allFlags);
    return Promise.reject(`Unknown flags - ${unknowns}`);
  }

  return Promise.resolve(allFlags);
};

const getUnknownFlags = (flags: typeof ACCEPTABLE_FLAGS) => {
  const unknowns = [];

  for (const flag of flags) {
    if (!ACCEPTABLE_FLAGS.includes(flag)) unknowns.push(flag);
  }

  return unknowns;
};
