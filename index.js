let bodyBlock = document.querySelector('body')

const createForm = document.createElement('form')
createForm.className = 'create-user-form'
bodyBlock.append(createForm)


const firstLabel = document.createElement('label')
firstLabel.innerText = 'Имя'
createForm.prepend(firstLabel)

const firstInput = document.createElement('input')
firstInput.type = 'text'
firstInput.name = 'userName'
firstInput.placeholder = 'Введите ваше имя'
firstLabel.append(firstInput)

const secondLabel = document.createElement('label')
secondLabel.innerText = 'Пароль'
createForm.append(secondLabel)

const secondInput = document.createElement('input')
secondInput.type = 'password'
secondInput.name = 'password'
secondInput.placeholder = 'Придумайте пароль'
secondLabel.append(secondInput)

const button = document.createElement('button')
button.type = 'submit'
button.innerText = 'Подтвердить'
createForm.append(button)

console.log(bodyBlock)


