let product;


function Product(productname, manufacturer) {
  this.productname = productname;
  this.manufacturer= manufacturer;
}

function SellerProduct(productname, manufacturer, date, price, color, seller, condition){
  Product.call(this, productname, manufacturer);
  this.date = date;
  this.price= price;
  this.color= color;
  this.seller= seller;
  this.condition= condition;
}
