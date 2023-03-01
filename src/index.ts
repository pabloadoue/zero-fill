/**
 * zeroFill
 * Given a number, return a zero-filled string.
 *
 * @name zeroFill
 * @function
 * @param {number} width The input number.
 * @param {number} number The path to the value you want to find.
 * @param {string} paddingCharacter The padding character to fill with. Defaults to `"0"`.
 * @return {string}
 */

export default function zeroFill (width: number, number: number, paddingCharacter: string = "0"): string {
    return (paddingCharacter.repeat(width) + number).slice(-width);
}