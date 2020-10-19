
let Catalogue = {
  productcards: function(productname){
    this.listproduct(productname);
  },
  listproduct: function(productname){
    switch (productname){
      case "Yamaha Pacifica":
       product = new Product(productname ,"yamaha");
       swtproduct= new SellerProduct(productname, "yamaha", "1997", 210, "blue");
       rebproduct= new SellerProduct(productname, "yamaha", "1999", 490, "red");
       manproduct= new SellerProduct(productname, "yamaha", "2000", 400, "black");
      break;
      case "Fender Stratocaster":
       product = new Product(productname, "fender");
       swtproduct= new SellerProduct(productname, "fender", "1997", 800, "red");
       rebproduct= new SellerProduct(productname, "fender", "1997", 790, "white");
       manproduct= new SellerProduct(productname, "fender", "1997", 1200, "red");
      break;
      case "PRS SE custom":
        product = new Product(productname , "PRS");
        swtproduct= new SellerProduct(productname, "prs", "1997", 670, "blue");
        rebproduct= new SellerProduct(productname, "prs", "1997", 650, "blue");
        manproduct= new SellerProduct(productname, "prs", "1997", 600, "purple");
      break;
      case "schecter":
        product = new Product(productname , "schecter");
        swtproduct= new SellerProduct(productname, "schecter", "2015", 900, "black");
        rebproduct= new SellerProduct(productname, "schecter", "2009", 650, "gold");
        manproduct= new SellerProduct(productname, "schecter", "2011", 750, "red");
      break;
      case "Jackson":
        product = new Product(productname , "Jackson");
        swtproduct= new SellerProduct(productname, "Jackson", "1999", 1320, "red");
        rebproduct= new SellerProduct(productname, "Jackson", "2012", 1200, "purple");
        manproduct= new SellerProduct(productname, "Jackson", "2011", 1100, "black");
      break;
      case "Strandberg":
        product = new Product(productname , "Strandberg");
        swtproduct= new SellerProduct(productname, "Strandberg", "2018", 2320, "white");
        rebproduct= new SellerProduct(productname, "Strandberg", "2020", 2200, "white");
        manproduct= new SellerProduct(productname, "Strandberg", "2019", 2000, "brown");
      break;
      case "Gibson":
        product = new Product(productname , "Gibson");
        swtproduct= new SellerProduct(productname, "Gibson", "2018", 2320, "white");
        rebproduct= new SellerProduct(productname, "Gibson", "2020", 2200, "white");
        manproduct= new SellerProduct(productname, "Gibson", "2019", 2000, "brown");
      break;
      case "Samsung Galaxy s10":
        product = new Product(productname , "Samsung Galaxy s10");
        swtproduct= new SellerProduct(productname, "Samsung Galaxy s10", "2019", 990, "white");
        rebproduct= new SellerProduct(productname, "Samsung Galaxy s10", "2020", 1000, "blackk");
        manproduct= new SellerProduct(productname, "Samsung Galaxy s10", "2020", 1100, "black");
      break;
    }
  let getInterface= document.querySelector(".interface");
  getInterface.innerHTML = '<h3><a href="index.html">Back</a></h3><img src="img/guitars/'+ productname.toLowerCase()
   +'.png" class="imagescan"><div><h3>'+ productname +'</h3><div class="row mt-2 py-3 px-2 bg-secondary" id="swtwala"><div  class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>SweetWater<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(1)">Add for comparison</button></h4><img src="img/guitars/Sweetwater/'+ productname.toLowerCase()
    +'.png" class="imagessub"><div class="sellersub"><p> <b>Sweetwater Price:</b> $'+
   swtproduct.price+'</p><p><b>Color: </b>'+swtproduct.color+'</p></div></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Reverb<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(2)">Add for comparison</button></h4><img src="img/guitars/Reverb/'+ productname.toLowerCase()
    +'.png" class="imagessub"><p><b> Reverb Price:</b> $'+
   rebproduct.price+'</p><p><b>Color: </b>'+rebproduct.color+'</p></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Manny<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(3)">Add for comparison</button></h4><img src="img/guitars/Manny/'+ productname.toLowerCase()
    +'.png" class="imagessub"><p> <b>Manny Price:</b> $'+
   manproduct.price+'</p><p><b>Color: </b>'+manproduct.color+'</p></div></div>';

  },
  compareselect: function(seller){
    let getChecked= document.querySelector(".added");
    let list=document.querySelector("#mylist");
    switch(seller){
      case 1:
       list.appendChild(swtproduct.color);
      break;
      case 2:
       getChecked.innerHTML='<p>'+rebproduct.color+'</p><button id="toggle">Compare</button>';
      break;
      case 3:
       getChecked.innerHTML='<p>'+manproduct.color+'</p><button id="toggle">Compare</button>';
      break;

   }
  }
}
