export default function JobItem({job}) {
    return (
        <div>
            <h2>{job.position}</h2>
            <h3>{job.start_date} - {job.end_date}</h3>
            <p>{job.body}</p>
        </div>
    )
}