import {examples, skills} from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = skills.filter((skill) => skill.id === id)

  if (filtered.length > 0) {
    res.status(200).json(JSON.stringify(filtered[0]))
  } else {
    res
      .status(404)
      .json({ message: `No skill with ${id} was found.` })
  }
}