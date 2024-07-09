export function getRandomId (context) {
    const items = context.items;
    const length = items.length;
    return Math.floor(Math.random() * length)
}