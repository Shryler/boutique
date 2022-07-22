import { DataManager } from "../helpers/dataManager.helper";

export class Category {
    id = -1;
    title = "";
    description = "";
    image = "";

    constructor(props){
        for (const key in props) { 
            if (!this.hasOwnProperty(key)){
                delete props[key];
            }
        }
        Object.assign(this, props);
    }
    getProductList(){
        const dataMngr = new DataManager();
        const rows = dataMngr.getAll("product").filter(item => item.category_id == this.id);
        return rows;
    }
}