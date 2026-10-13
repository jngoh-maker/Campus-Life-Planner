function isValidTitle(title) {
    const titlePattern = /^(?=.*[A-Za-z])[A-Za-z0-9\s-]{3,}$/;
    return titlePattern.test(title.trim());
}