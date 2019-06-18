export default function formatDate(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    const h = date.getHours();
    const m = date.getMinutes();
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
}
