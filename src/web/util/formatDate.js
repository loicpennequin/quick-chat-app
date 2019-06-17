export default function formatDate(date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    const h = date.getHours();
    const m = date.getMinutes();
    return `${h < 10 ? h : '0' + h}:${m < 10 ? m : '0' + m}`;
}
