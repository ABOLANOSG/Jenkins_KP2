export function PreciseTextLocator(text) {
    return `//*[text()='${text}']`
};

export function PartialTextLocator(partialText) {
    return `//*[contains(text(),'${partialText}')]`
};

export function idLocator(id) {
    return `//*[@id='${id}']`
};

export function classLocator(classLoc) {
    return `//*[@class='${classLoc}']`
}