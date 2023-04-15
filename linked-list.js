const Node = (value = null, next = null) => {
  return {
    value,
    next
  }
}

const LinkedList = () => {
  let root = null;
  let end = null;
  let sizeList = 0;
  
  const append = (val) => {
    const newNode = Node(val)
    if (root === null) {
      root = newNode
      end = root
    } else {
      end.next = newNode
      end = newNode
    }
    sizeList += 1
  }

  const prepend = (val) => {
    const newNode = Node(val)
    if (root === null) {
      root = newNode
      end = root
    } else {
      newNode.next = root
      root = newNode
    }
    sizeList += 1
  }

  const size = () => sizeList;

  const head = () => root;

  const tail = () => end;

  const at = (index) => {
    if (index >= 0 && index < sizeList ) {
      node = root
      for (let i = 0; i < index; i += 1) {
        node = node.next
      }
      return node
    }
    return null
  }

  const pop = () => {
    if (sizeList > 0) {
      end = at(sizeList - 2)
      end.next = null
      sizeList -= 1
    }
  }

  const contains = (value) => {
    node = root
    for (let i = 0; i < sizeList; i += 1) {
      if (node.value === value) {
        return true
      }
      node = node.next
    }
    return false
  }

  const find = (value) => {
    node = root
    for (let i = 0; i < sizeList; i += 1) {
      if (node.value === value) {
        return i
      }
      node = node.next
    }
    return null
  }

  const toString = () => {
    string = ""
    node = root
    for (let i = 0; i < sizeList; i += 1) {
      string += `( ${node.value} ) -> `
      node = node.next
    }
    string += "null"
    return string
  }

  const insertAt = (value, index) => {
    if (index >= 0 && index <= sizeList) {
      if (index === sizeList) {
        append(value)
      } else if (index === 0) {
        prepend(value)
      } else {
        const newNode = Node(value)
        newNode.next = at(index)
        at(index - 1).next = newNode
        sizeList += 1
      }
    }
  }

  const removeAt = (index) => {
    if (index >= 0 && index < sizeList) {
      if (index === sizeList - 1) {
        pop()
        // to avoid reducing sizeList twice
        sizeList += 1
      } else if (index === 0) {
        root = root.next
      } else {
        at(index - 1).next = at(index + 1)
      }

      sizeList -= 1 
    }
  }


  return {
    append,
    prepend,
    size,
    head,
    tail,
    at, 
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt
  }
}

const newList = LinkedList()
