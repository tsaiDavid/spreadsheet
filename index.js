document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.getElementById('app')
  const columns = ['A', 'B', 'C', 'D', 'E'] 

  let table = document.createElement('div')
  table.className = 'container'
 
  // Make Header
  columns.forEach(col => {
    const colNode = document.createElement('div')
    colNode.appendChild(document.createTextNode(col))
    table.appendChild(colNode)
  })

  // Make Rows

  rootNode.appendChild(table)
})
