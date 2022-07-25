import { DataManager } from "../helpers/dataManager.helper";
import { BaseModel } from "./baseModel.model";

export class Product extends BaseModel {

    title = "";
    price = "";
    description = "";
    image = "";
    category_id = -1;

    constructor(props) { // Permet d'appeler le constructor dans le constructor baseModel
        super(props);
        this.assign(props);
    }

    getCategory() {
        const dataMngr = new DataManager();
        return dataMngr.getOne("category", this.category_id);
      }
}