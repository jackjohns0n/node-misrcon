/**
 * Parses the response from the rcon command mis_whitelist_status
 * @param {string} res   string with the server response
 * @returns {Array} An array of whitelisted players
 */
export function parseWhitelistResponseToJs(res) {
  return res
    .replace('-----------------------------------------', '')
    .replace('-----------------------------------------', '')
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace('Whitelisted players : ', '')
    .split(' ')
    .filter((x) => x !== 'SteamID:')
    .filter((x) => x !== '0')
    .filter((x) => x !== '');
}
