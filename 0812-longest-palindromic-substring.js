/**
 * @param {string} s
 * @return {string}
 * babdba
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0
    let maxLength = 0;
    let maxStr = ''
    while(start < s.length) {
        const startNode = s[start]
        end = s.lastIndexOf(startNode, end === 0 ? s.length - 1 : end - 1)
        if (start === end) {
            if (maxLength === 0) {
                maxStr = startNode
            }
            start++
            end = 0
            continue
        } else if (end > -1) {
            const snippet = s.substring(start, end+1)
            if (isPalindrome(snippet)) {
                if (snippet.length >= maxLength) {
                    maxLength = snippet.length
                    maxStr = snippet
                }
                start++
                end = 0
                continue
            }
        }
    }
    return maxStr || s[s.length - 1]
};

function isPalindrome(str) {
    const str2 = str.split('').reverse().join('')
    return str === str2
}

console.time()
longestPalindrome("qbmhukucteihghldwdobtvgwwnhflpceiwhbkmvxavmqxedfndegztlpjptpdowwavemasyrjxxnhldnloyizyxgqlhejsdylvkpdzllrzoywfkcamhljminikvwwvqlerdilrdgzifojjlgeayprejhaequyhcohoeonagsmfrqhfzllobwjhxdxzadwxiglvzwiqyzlnamqqsastxlojpcsleohgtcuzzrvwzqugyimaqtorkafyebrgmrfmczwiexdzcokbqymnzigifbqzvfzjcjuugdmvegnvkgbmdowpacyspszvgdapklrhlhcmwkwwqatfswmxyfnxkepdotnvwndjrcclvewomyniaefhhcqkefkyovqxyswqpnysafnydbiuanqphfhfbfovxuezlovokrsocdqrqfzbqhntjafzfjisexcdlnjbhwrvnyabjbshqsxnaxhvtmqlfgdumtpeqzyuvmbkvmmdtywquydontkugdayjqewcgtyajofmbpdmykqobcxgqivmpzmhhcqiyleqitojrrsknhwepoxawpsxcbtsvagybnghqnlpcxlnshihcjdjxxjjwyplnemojhodksckmqdvnzewhzzuswzctnlyvyttuhlreynuternbqonlsfuchxtsyhqlvifcxerzqepthwqrsftaquzuxwcmjjulvjrkatlfqshpyjsbaqwawgpabkkjrtchqmriykbdsxwnkpaktrvmxjtfhwpzmieuqevlodtroiulzgbocrtiuvpywtcxvajkpfmaqckgrcmofkxynjxgvxqvkmhdbvumdaprijkjxxvpqnxakiavuwnifvyfolwlekptxbnctjijppickuqhguvtoqfgepcufbiysfljgmfepwyaxusvnsratn")
console.timeEnd()