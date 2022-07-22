import { DataManager } from "../helpers/dataManager.helper.js";

const dataMngr = new DataManager();
const rows = dataMngr.getAll('category');

for(const row of rows){
    const rowTemplate = document.querySelector('.row-template').cloneNode(true);
    rowTemplate.removeAttribute("hidden");
    for(const prop in row){
        rowTemplate.querySelector(`.${prop}`).innerText = row[prop];
    }
    const tableBody = document.querySelector('tbody');
    tableBody.append(rowTemplate);
}