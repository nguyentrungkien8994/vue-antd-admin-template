export function format(text, ...args) {
    return text.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
            ;
    });
}
export function getDefaultHeader() {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    };
}
export function getAPIUrl() {
    return "http://localhost:51602";
}