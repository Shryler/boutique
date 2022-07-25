import { DataManager } from "../helpers/dataManager.helper.js";

const dataMngr = new DataManager();
const category = dataMngr.getAll("category");

// const category_id = [];
// category.forEach(element => {
//     category_id.push(element.id);
// });

function generateDetail(category){
    console.log(category);
    category.forEach(element => {
        if(localStorage.getItem("pageSelect") == `http://boutique/categoryDetail.html?categorySelect=${element.id}`){
        const products = dataMngr.getOne("category", element.id);
        const listProduct = products.getProductList();


        titlePage.innerHTML = `Liste de la catégorie : <strong>${element.title}</strong>`;
        cardGroup.innerHTML = listProduct.map((category) => {
            return `
            <div class="col-sm-3">
            <div class="card">
            <span class="position-absolute top-0 m-1 end-0 badge rounded-pill bg-danger"><small>${category.price} €</small></span>
                <img src="${category.image}" class="card-img-top" alt="Image de ${category.title}">
                <div class="card-body">
                    <h5 class="card-title">${category.title}</h5>
                    <p class="card-text">${category.description}</p>
                </div>
            </div>
            </div>
            `
        }).join("");    
    }
    });
}

generateDetail(category);

// Récupère la liste des produits de la catégorie n°1
// const product8 = dataMngr.getOne("category", 1);
// const listproductbycat = product8.getProductList();
// console.log(listproductbycat);