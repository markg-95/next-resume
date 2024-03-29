import {examples, jobs} from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = jobs.filter((job) => job.id === id)

  if (filtered.length > 0) {
    res.status(200).json(JSON.stringify(filtered[0]))
  } else {
    res
      .status(404)
      .json({ message: `No job with ${id} was found.` })
  }
}