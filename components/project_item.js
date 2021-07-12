export default function ProjectItem({example}) {
    return (
        <div>
            <h2>{example.title}</h2>
            <p>{example.body}</p>
            <a href={example.link} target="_blank" rel="noopener noreferrer">Click Here</a>
        </div>
    )
}