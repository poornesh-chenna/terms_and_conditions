const data = {
  copyright: ['abcde', 'defdef'],
  description: ['This', 'is', 'this', 'that'],
}

const categories_list = Object.keys(data)
const categories_div = document.getElementById('categories')

const getCategories = () => {
  const promise = new Promise((resolve, reject) => {
    categories_list.forEach((category) => {
      const div_element = document.createElement('div')
      //   div_element.className = 'category_item'
      div_element.classList.add('category_item')
      div_element.textContent = category
      categories_div.appendChild(div_element)
    })

    if (categories_list.length > 0) {
      resolve(categories_list)
    } else {
      const err = new Error('categories_list is empty')
      reject(err)
    }
  })
  return promise
}

const onClick = () => {
  const content_div = document.getElementById('content')
  const categories = document.querySelectorAll('.category_item')

  console.log(categories)
  data[categories[0].innerHTML].forEach(function (content_text) {
    const content_element = document.createElement('div')
    content_element.classList.add('content_item')
    content_element.textContent = content_text
    content_div.appendChild(content_element)
  })

  categories.forEach((category) => {
    category.addEventListener('click', (event) => {
      while (content_div.firstChild) {
        content_div.removeChild(content_div.firstChild)
      }
      console.log(event.target.innerHTML)
      data[event.target.innerHTML].forEach(function (content_text) {
        const content_element = document.createElement('div')
        content_element.classList.add('content_item')
        content_element.textContent = content_text

        content_div.appendChild(content_element)
      })
    })
  })
}

getCategories().then(onClick)
