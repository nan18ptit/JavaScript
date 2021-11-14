// List Account
let listAcc = [
    {   userName: 'nan18', 
        passWord: '123'
    },
    {   userName: 'anhnn', 
        passWord: '123'
    }
]

// Login
// Lấy giá trị
function getValue(id){
    return document.getElementById(id).value.trim();
}
// Hiển thị lỗi
function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}


// hàm check validate
function validate(){
    let flag = true;
    const userName = getValue('userName');
    const passWord = getValue('passWord');
    // check nhập username 
    if(userName == ''){
        flag = false
        showError('userName', 'Username not be blank!')
    }
    if (passWord ==''){
        flag = false
        showError('passWord', 'Password not be blank!')
    }
    return flag
}
// hàm check account
function checkAcc(){
    if (validate()){
        const userName = getValue('userName');
        const passWord = getValue('passWord');
        for (let i in listAcc){
            if (listAcc[i].userName == userName){
                if (listAcc[i].passWord == passWord){
                    alert("Login successful!")
                    return true;
                }
                alert('Invalid username/password!')
                return false;
            }
        }
        alert('Account not found')
        return false;
    }
}

const btnLogin = document.querySelector('#btn-login')
btnLogin.addEventListener('click', checkAcc)
// reset lai showError
function resetInput(key){
    document.getElementById(key).addEventListener('click', function(){
        showError(key,'')
    })
}
resetInput('userName')
resetInput('passWord')
// Forget password
function forgetPassWord(){
    alert('Chức năng này đang được phát triển')
}
const fogetPW = document.querySelector('#forget-pw')
fogetPW.addEventListener('click', forgetPassWord)

// show sign up
const modal = document.querySelector('.modalSignUp')
const openFormSignUp = document.querySelector('#open-sign-up')
const modalClose = document.querySelector('.modal-close')
const modalContaner = document.querySelector('.modal-contaner')

function showFormSignUp(){
    modal.classList.add('open')
}
function hideFormSignUp(){
    modal.classList.remove('open')
    location.reload()
}

openFormSignUp.addEventListener('click', showFormSignUp)
modalClose.addEventListener('click', hideFormSignUp)
modal.addEventListener('click', hideFormSignUp)
// Ngăn nổi bọt chức năng hide tại modalContainer
modalContaner.addEventListener('click', function(event){
    event.stopPropagation()
})
// Sign Up
// check valide

function validateSignUp(){
    let flag = true;
    const userNameSignUp = getValue('userNameSignUp');
    const passWordSignUp = getValue('passWordSignUp');
    const rePassWord = getValue('rePassWord');
    if(userNameSignUp == ''){
        flag = false
        showError('userNameSignUp', 'Username not be blank!')
    }
    if (passWordSignUp ==''){
        flag = false
        showError('passWordSignUp', 'Password not be blank!')
    }
    if (rePassWord ==''){
        flag = false
        showError('rePassWord', 'Confirm password not be blank!')
    } else if (rePassWord != passWordSignUp && passWordSignUp !=''){
        flag = false
        showError('passWordSignUp', 'Password not be match Confirm password!')
        showError('rePassWord', 'Password not be match Confirm password!')
    }
    return flag
}
// check and creat account
function creatAcc(){
    if (validateSignUp()){
        const userNameSignUp = getValue('userNameSignUp');
        const passWordSignUp = getValue('passWordSignUp');
        const rePassWord = getValue('rePassWord');
        for (let i in listAcc){
            if (listAcc[i].userName == userNameSignUp){
                showError('userNameSignUp', 'Account already exists!')
                return false;
            }
        }
        const acc = {   userName: userNameSignUp,
                        passWord: passWordSignUp
                    }
        listAcc.push(acc)
        hideFormSignUp()
        alert('Register successfull')
        
    }
}

const btnSignUp = document.querySelector('#btn-sign-up')
btnSignUp.addEventListener('click', creatAcc)

// reset lai showError
resetInput('userNameSignUp')
resetInput('passWordSignUp')
resetInput('rePassWord')