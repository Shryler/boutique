import { DataManager } from "./helpers/dataManager.helper.js";

const dataMngr = new DataManager(["category", "product"]);
dataMngr.initDataStorage();

// Récupère la liste des produits de la catégorie n°1
// const product8 = dataMngr.getOne("category", 1);
// const listproductbycat = product8.getProductList();
// console.log(listproductbycat);

function createCategory() {
    const listCategory = dataMngr.getAll("category");
    cardGroup.innerHTML = listCategory.map((category) => {
        return `
        <div class="col-sm-4">
        <a id="categoryLink" href="categoryDetail.html?categorySelect=${category.id}">
        <div class="card">
            <img src="${category.image}" class="card-img-top" alt="Image de ${category.title}">
            <div class="card-body">
                <h5 class="card-title">${category.title}</h5>
                <p class="card-text">${category.description}</p>
            </div>
        </div>
        </a>
        </div>
        `
    }).join("");

    const links = document.querySelectorAll('a[id="categoryLink"]');
    
    for (const link of links) {
        link.addEventListener("click", () => {
            localStorage.setItem("pageSelect", link.href);
        });
    }
}


createCategory();