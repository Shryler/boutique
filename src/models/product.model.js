import { DataManager } from "../helpers/dataManager.helper";

export class Product {
    id = -1;
    title = "";
    price = "";
    description = "";
    image = "";
    category_id = -1;

    constructor(props){
        for (const key in props) { 
            if (!this.hasOwnProperty(key)){
                delete props[key];
            }
        }
        Object.assign(this, props);
    }
    getCategory() {
        const dataMngr = new DataManager();
        const category = dataMngr.getOne("product", this.category_id);
        return category;
      }
}