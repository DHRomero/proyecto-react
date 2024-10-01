const products=[
    {id:1, nombre: "Claroscuro", categoryId: "Vinos-Tintos", description : "Cabernet Franc", Bodega: "Claroscuro", Precio: 12500, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VkIGW55cb700JkgOqNGBfnoNNVQFDaTcuQ&s"},
    {id:2, nombre: "Claroscuro", categoryId: "Vinos-Tintos",description : "Gran Malbec 2018", Bodega: "Claroscuro", Precio: 25000, imagen: "https://c1090349-b331.kxcdn.com/wp-content/uploads/2021/09/gm2018.png"},
    {id:3, nombre: "Desquiciado", categoryId: "Vinos-Blancos", description : "Blend de Blancas", Bodega: "Desquiciado Wine", Precio: 13000, imagen: "https://vinotecaligier.com/media/catalog/product/cache/73269a27812eefec516431430aa0b457/b/e/be75854_base.jpg"},
    {id:4, nombre: "Desquiciado", categoryId: "Vinos-Blancos", description : "Chardonnay", Bodega: "Desquiciado Wine", Precio: 10500, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYYYBZenHKNB8pok-feUK1oab-TslEZa_YA&s"},
    {id:5, nombre: "Desquiciado",categoryId:"Vinos-Tintos", description : "Malbec", Bodega: "Desquiciado Wine", Precio: 25000, imagen: "https://www.espaciovino.com.ar/media/default/0001/57/thumb_56075_default_medium.jpeg"},
    {id:6, nombre: "Tinto de Guarda", categoryId: "Vinos-Tintos", description: "Cabernet Franc", Bodega: "Solo contigo Wine", Precio: 15000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuW8khaQ7HGR8FT0lNR8DlMd_Xh7rqcply1g&s"},
    {id:7, nombre: "Uno", categoryId: "Vinos-Rosados", description : "Rosé", Bodega: "Antigal Wine", Precio: 9500, imagen: "https://infonegocios.info/content/images/2024/06/11/464886/conversions/uno-rose-medium-size.jpg"},
    {id:8, nombre: "Uno", categoryId: "Vinos-Blancos", description : "Sauvignon Blanc", Bodega: "Antigal Wine", Precio: 9500, imagen: "https://vinotecaligier.com/media/catalog/product/cache/73269a27812eefec516431430aa0b457/b/e/be70179_base.jpg"},
    {id:9, nombre: "Aqui estamos todos Locos", categoryId: "Vinos-Rosados", description : "Rosé", Bodega: "Niven", Precio: 7500, imagen: "https://dcdn.mitiendanube.com/stores/002/820/637/products/aqui-estamos-todos-locos-sauvignon-franc-rosado-e758a2a35dd2a68ba617070018042679-1024-1024.png"},

]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
  };
  
  
  export const getCategory = (categoryId) => {
    return products.filter((product) => product.categoryId === categoryId);
    
  };
