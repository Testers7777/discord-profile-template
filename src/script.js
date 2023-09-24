"use strict";

const noteToAcc = document.querySelector('.notetoacc')

window.addEventListener('DOMContentLoaded', () => {
    noteToAcc.innerHTML = sessionStorage.getItem("note");
})

tippy('.badge1', {
    content: 'HypeSquad Bravery',
    theme: "type",
    offset: [0, 12]
});

tippy('.badge2', {
    content: 'Développeur actif',
    theme: "type",
    offset: [0, 12]
});

tippy('.badge3', {
    content: 'Abonné depuis 10 août 2023',
    theme: "type",
    maxWidth: "200px",
    offset: [0, 12]
});

tippy('.badge4', {
    content: `Ancien nom : DIISLAY#9240`,
    theme: "type",
    maxWidth: "200px",
    offset: [0, 12]
});

tippy('.pronouns', {
    content: 'Pronoms',
    theme: "type"
});

tippy('#git', {
    content: ':logo_github:',
    theme: "type"
});

tippy('#horn', {
    content: ':postal_horn:',
    theme: "type"
});

tippy('.status', {
    content: 'Inactif',
    theme: "type"
});

noteToAcc.addEventListener('blur', () => {
    sessionStorage.setItem("note", noteToAcc.value);
});