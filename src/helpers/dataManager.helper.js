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
}