'use strict'

let elUserForm = document.querySelector('.form')
let UserName = document.querySelector('.form-input-1')
let UserEmail = document.querySelector('.form-input-2')
let UserScore = document.querySelector('.form-input-3')
let UserResult = document.querySelector('.result')

elUserForm.addEventListener('submit', function(e) {
    e.preventDefault()
    if (UserScore.value <= '50' ) {
        UserResult.textContent ='Afsus imtihondan o`ta olmadingiz'
    }
      else if (UserScore.value <= '60' ) {
        UserResult.textContent ='siz superkontraktga kirdingiz'
    }
    else if (UserScore.value <= '80' ) {
        UserResult.textContent ='siz kontraktga kirdingiz'
    } 
    else if (UserScore.value <= '99' ) {
        UserResult.textContent ='siz grand asosida oqishga kirdingiz'
    } 
    else {
        UserResult.textContent ='xato'
    }
})