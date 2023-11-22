const fs = require("fs")

class ProductManager{
    constructor(){
        this.path = "./productos.json"
        this.products = []
    }
    static id = 0
    async addproduct(title, description, price, thumbnail, code, stock) {
        ProductManager.id++;
        let nuevoProducto = 
          {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
          }
        ;
    
        this.products.push(nuevoProducto);
    
        await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2));
      }
      async getProducts() {
        try {
          const data = await fs.promises.readFile(this.path, 'utf-8');
          const arrayProductos = JSON.parse(data);
          console.log(arrayProductos);
        } catch(err) {
          console.log(err);
        }
      }
    
      async getProductsById(id){
        try{
          const data = await fs.promises.readFile(this.path, 'utf-8');
          const arrayProductos = JSON.parse(data);
          const prodPorId = arrayProductos.find((prod)=> prod.id === id)
          console.log(prodPorId)
        }catch(err){
    console.log(err)
        }
      }
}

const productos = new ProductManager