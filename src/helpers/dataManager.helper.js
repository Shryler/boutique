import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export class DataManager {
    folder = "data";
    files = [];

    constructor(files, folder) {
        this.files = files;
        this.folder = folder || "data";
    }

    async initDataStorage() {
        const dataStorage = {};
        for (const file of this.files) {
            dataStorage[file + "Data"] = await this.readJsonFile(file);
        }
        localStorage.setItem("data", JSON.stringify(dataStorage));
    }

    async readJsonFile(file) {
        let items = [];
        await fetch(`./src/${this.folder}/${file}.json`)
            .then((resp) => resp.text())
            .then((text) => (items = JSON.parse(text)));
        return items;
    }
    getAll(table) {
        const data = JSON.parse(localStorage.getItem("data"));
        const rows = data[table + "Data"]?.map(row => {
            switch (table) {
                case "category":
                    return new Category(row);
                case "product":
                    return new Product(row);
            }
        });
        return rows;
    }

    getOne(table, id) {
        const data = JSON.parse(localStorage.getItem("data"));
        const row = data[table + "Data"]?.find(item => item.id == id);
        if (!row) {
            return undefined;
        }
        switch (table) {
            case "category":
                return new Category(row);
            case "product":
                return new Product(row);
        }
    }
    
    update(model){
        const table = model.constructor.name.toLowerCase();
        const data = JSON.parse(localStorage.getItem('data')); //Je récupère toutes les données
        const dataTable = data[table + "Data"]; ///Je récupère la table dont j'ai besoin
        let row = dataTable?.find(item => item.id == model.id); //Je récupère la ligne qui m'intéresse (grace à l'id)
        for(const key in row){ //Je mets à jour la ligne
            row[key] = model[key]
        }
        localStorage.setItem("data", JSON.stringify(data)); //Je sauvegarde les données en localStorage
    }
}