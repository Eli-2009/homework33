function addStudents(name){
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = name
    ul.append(li)
}
addStudents('Ali')
addStudents('Akif')
addStudents('Samir')