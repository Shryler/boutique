import { DataManager } from "../helpers/dataManager.helper";
import { BaseModel } from "./baseModel.model";

export class Category extends BaseModel {

    title = "";
    description = "";
    image = "";

    constructor(props) { // Permet d'appeler le constructor dans le constructor baseModel
        super(props);
        this.assign(props);
    }

    getProductList(){
        const dataMngr = new DataManager();
        return dataMngr.getAll("product").filter(item => item.category_id == this.id);
    }
}