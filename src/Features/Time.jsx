import { parseISO, formatDistanceToNow } from 'date-fns';
//The parseISO function is used to parse an ISO 8601 formatted date string into a JavaScript Date object.
//"2025-03-26T12:00:00Z"->Wed Mar 26 2025 12:00:00 GMT+0000
//The formatDistanceToNow function is used to return a human-readable string representing the distance (in time) from a given date to the current time
//2025-03-26T12:00:00Z->6 days ago"
const Time = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default Time