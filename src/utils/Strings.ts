function checkNotEmty(str: string): boolean {
    if (str.trim().length === 0) {
        return false
    }
    return true
}

export { checkNotEmty }