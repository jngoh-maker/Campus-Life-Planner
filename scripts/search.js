let currentSearchRegex = null;

function updateSearchPattern(pattern, caseInsensitive) {
    try {
        currentSearchRegex = new RegExp(
            pattern,
            caseInsensitive ? "gi" : "g"
        );
        return true;
    } catch (error) {
        currentSearchRegex = null;
        return false;
    }
}

function highlightMatches(element, text) {
    if (!currentSearchRegex || currentSearchRegex.source === "(?:)") {
        element.textContent = text;
        return;
    }


const regex = new RegExp(
    currentSearchRegex.source,
    currentSearchRegex.flags
);
const fragment = document.createDocumentFragment();
let lastIndex = 0;

for (const match of text.matchAll(regex)) {
    fragment.appendChild(
        document.createTextNode(text.slice(lastIndex, match.index))
    );

    const mark = document.createElement("mark");
    mark.textContent = match[0];
    fragment.appendChild(mark);

    lastIndex = match.index + match[0].length;
}
    
fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
element.appendChild(fragment);

}