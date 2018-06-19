document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.getElementById('app')
  const columns = ['A', 'B', 'C', 'D', 'E'] 
  const rows = [1, 2, 3, 4]

  let table = document.createElement('div')
  table.className = 'container'
 
  // Make Header
  const header = document.createElement('div')
  header.setAttribute('id', 'header')
  header.setAttribute('class', 'row')

  columns.forEach(col => {
    const colNode = document.createElement('div')
    colNode.setAttribute('id', col)
    colNode.setAttribute('class', 'cell hcell')
    colNode.appendChild(document.createTextNode(col))
    header.appendChild(colNode)
  })

  // mount header container row to table
  table.appendChild(header)

  // Make Rows
  const makeRows = (cols, rows) => {
    rows.forEach(row => {
      const rowParent = document.createElement('div')
      rowParent.setAttribute('class', 'row')
      rowParent.setAttribute('id', row)

      columns.forEach(col => {
        const rowNode = document.createElement('div')
        rowNode.setAttribute('class', 'cell')
        rowNode.setAttribute('id', `${col}${row}`)
        rowNode.addEventListener('click', () => {
          const inputText = window.prompt('enter field', rowNode.innerText)
          rowNode.innerText = inputText
        })
        rowParent.appendChild(rowNode)
      })

      table.appendChild(rowParent)
    })
  }

  makeRows(columns, rows)

  rootNode.appendChild(table)
})