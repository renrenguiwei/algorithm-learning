function removeComments(source: string[]): string[] {
    let res = []
    let newLine = ''
    let inBlock = false
    for (let line of source) {
        for (let i=0; i < line.length; i++) {
            if (inBlock) {
                if (i + 1 < line.length && line[i] === '*' && line[i+1] === '/') {
                    inBlock = false
                    i++
                }
            } else {
                if (i + 1 < line.length && line[i] === '/' && line[i+1] === '*') {
                    inBlock = true
                    i++
                } else if (i + 1 < line.length && line[i] === '/' && line[i+1] === '/') {
                    break
                } else {
                    newLine += line[i]
                }
            }
        }
        if (!inBlock && newLine.length > 0) {
            res.push(newLine)
            newLine = ''
        }
    }
    return res
}