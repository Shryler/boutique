export class App{

    start(){
        window.onpopstate = (e) => {
            this.browse(e.state?.route || "");
        }

        window.onload = () => { 
            console.log("load"); 
            if (!history.state){
                this.browse("");
            } else {
                this.browse(history.state.root);
            }
        }

        document.querySelectorAll("[href]").forEach(link => {
            link.onclick = (e)=> {
                e.preventDefault();
                console.log(e);
                const root = e.target.pathname;

                this.browse(root);
            }
        })
    }

    browse(root){
        console.log(root);
        history.pushState({
            root
        }, null, root);
    }
}