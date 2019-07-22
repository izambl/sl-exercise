import stringSimilarity from 'string-similarity';

const isPossibleDuplicateOptions = {
  treshold: 0.9, // Treshold to declare if strings are possible duplicates
};

/**
 * Checks if two strings may be duplicated
 *
 * @param {string} string01 - First string to compare
 * @param {string} string02 - Second string to compare
 * @param {object} options - Options to configure comparision
 *
 * @return {boolean} true if strings similaritiest exceeds the defined treshold
 */
export function isPossibleDuplicate(string01, string02, options = {}) {
  const runOptions = {
    ...isPossibleDuplicateOptions,
    ...options,
  };

  const similariyIndex = stringSimilarity.compareTwoStrings(string01, string02);

  return similariyIndex >= runOptions.treshold;
}

export default {};
