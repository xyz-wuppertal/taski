export const groupBy = (array, key) => {
  return array.reduce((acc, task) => {
    const {
      status,
      _id,
      title,
      description,
      priority,
      createdAt,
      updatedAt,
      __v,
    } = task

    const groupKey = task[key] // Dynamically get the key to group by

    if (!acc[groupKey]) {
      acc[groupKey] = {
        _id: groupKey,
        tasks: [],
        count: 0,
      }
    }

    const taskObj = { _id, title, description, priority, status, __v }
    if (createdAt) taskObj.createdAt = createdAt
    if (updatedAt) taskObj.updatedAt = updatedAt

    acc[groupKey].tasks.push(taskObj)
    acc[groupKey].count += 1

    return acc
  }, {})
}
