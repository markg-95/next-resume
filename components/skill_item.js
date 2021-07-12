export default function SkillItem({skill}) {
    return (
        <div>
            <h2>{skill.title}</h2>
            <p>{skill.body}</p>
        </div>
    )
}