
let Catalogue = {
  productcardsg: function(productname){
    this.listproductg(productname);
  },
  listproductg: function(productname){
    switch (productname){
      case "Yamaha Pacifica":
       product = new Product(productname ,"yamaha");
       swtproduct= new SellerProduct(productname, "yamaha", "1997", 210, "blue","SweetWater","Brand New","Yamaha Pacificas are beautiful guitars handcrafted and done");
       rebproduct= new SellerProduct(productname, "yamaha", "1999", 490, "red", "Reverb","Brand New","eram multos labore duis quorum duis malis fore sint irure fore veniam elit multos quid");
       manproduct= new SellerProduct(productname, "yamaha", "2000", 400, "black","Manny","Excellent","cillum velit irure sint quorum malis export culpa elit illum sint aliqua eramesse magna");
      break;
      case "Fender Stratocaster":
       product = new Product(productname, "fender");
       swtproduct= new SellerProduct(productname, "fender", "1997", 800, "red","SweetWater","Poor","enim irure eram legam summis noster quorum velit legam anim sunt legam quem nisianim");
       rebproduct= new SellerProduct(productname, "fender", "1997", 790, "white","Reverb","Intact","quae summis duis legam elit velit sint multos quid elit tamen cillum sunt fugiatenim");
       manproduct= new SellerProduct(productname, "fender", "1997", 1200, "red","Manny","Good","anim illum quorum minim multos nisi aliqua duis multos noster enim noster nisidolore legam");
      break;
      case "PRS SE custom":
        product = new Product(productname , "PRS");
        swtproduct= new SellerProduct(productname, "prs", "1997", 670, "blue","SweetWater","Good","magna nulla quorum labore dolor duis sunt fore sint quorum noster nulla quisfore");
        rebproduct= new SellerProduct(productname, "prs", "1997", 650, "blue","Reverb","Brand New","sint amet fore nulla fugiat duis esse amet noster velit veniam anim sint ametquem");
        manproduct= new SellerProduct(productname, "prs", "1997", 600, "purple","Manny","Excellent","quorum quis nulla aliqua veniam summis quis tempor sint duis nisi duis culpanulla sunt");
      break;
      case "schecter":
        product = new Product(productname , "schecter");
        swtproduct= new SellerProduct(productname, "schecter", "2015", 900, "black","SweetWater","Broken Headstock","legam dolor noster aliqua sint multos multos quis noster culpa nisi tempor iruretempor quis");
        rebproduct= new SellerProduct(productname, "schecter", "2009", 650, "gold","Reverb","Good","quorum quis aliqua export esse quem cillum fore veniam ipsum sunt fugiat malisnulla multos");
        manproduct= new SellerProduct(productname, "schecter", "2011", 750, "red","Manny", "Brandnew","aute quae minim summis fore quae ipsum irure quem amet dolore aliqua magnaaliqua amet");
      break;
      case "Jackson":
        product = new Product(productname , "Jackson");
        swtproduct= new SellerProduct(productname, "Jackson", "1999", 1320, "red","SweetWater","Brand New","dolore eram fugiat labore dolor enim summis minim ipsum enim quis quorum velitelit summis");
        rebproduct= new SellerProduct(productname, "Jackson", "2012", 1200, "purple","Reverb","SweetWater","Brand New","fore esse amet dolore labore quid sunt malis esse quid duis export nulla summisquem");
        manproduct= new SellerProduct(productname, "Jackson", "2011", 1100, "black","Manny","Old rusty","multos magna anim nisi summis sint sunt duis quid quid quid aliqua legam malisquem");
      break;
      case "Strandberg":
        product = new Product(productname , "Strandberg");
        swtproduct= new SellerProduct(productname, "Strandberg", "2018", 2320, "white","SweetWater","Vintage rust","quorum quorum esse illum aliqua cillum sunt quorum amet sunt sint tempor quaelegam fugiat");
        rebproduct= new SellerProduct(productname, "Strandberg", "2020", 2200, "white","Reverb", "Excellent","duis duis duis magna quid irure quid anim amet fugiat duis malis quis tamensummis");
        manproduct= new SellerProduct(productname, "Strandberg", "2019", 2000, "brown","Manny", "Untouched","veniam amet irure export malis magna cillum magna dolor nisi amet tamen dolorequem elit");
      break;
      case "Gibson":
        product = new Product(productname , "Gibson");
        swtproduct= new SellerProduct(productname, "Gibson", "2018", 2320, "white","SweetWater","Good","Qwqwqwwqew");
        rebproduct= new SellerProduct(productname, "Gibson", "2020", 2200, "white","Reverb","Brand New","enim velit magna nisi quid esse nisi duis sint irure tamen tamen cillum sintamet cillum eram irure aute multos");
        manproduct= new SellerProduct(productname, "Gibson", "2019", 2000, "brown","Manny","Good","duis sunt dolore fore esse sint eram illum tempor duis irure culpa malis minimnulla tempor velit noster enim minim");
      break;


    }
  let getInterfaceg= document.querySelector(".interfaceg");
  getInterfaceg.innerHTML = '<h3><a href="guitars.html">Back</a></h3><img src="img/guitars/'+ productname.toLowerCase()
   +'.png" class="imagescan"><div><h3>'+ productname +'</h3><div class="row mt-2 py-3 px-2 bg-secondary" id="swtwala"><div  class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>SweetWater<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(1)">Add for comparison</button></h4><img src="img/guitars/Sweetwater/'+ productname.toLowerCase()
    +'.png" class="imagessub"><div class="sellersub"><p> <b>Sweetwater Price:</b> $'+
   swtproduct.price+'</p><p><b>Color: </b>'+swtproduct.color+'</p></div></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Reverb<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(2)">Add for comparison</button></h4><img src="img/guitars/Reverb/'+ productname.toLowerCase()
    +'.png" class="imagessub"><p><b> Reverb Price:</b> $'+
   rebproduct.price+'</p><p><b>Color: </b>'+rebproduct.color+'</p></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Manny<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselect(3)">Add for comparison</button></h4><img src="img/guitars/Manny/'+ productname.toLowerCase()
    +'.png" class="imagessub"><p> <b>Manny Price:</b> $'+
   manproduct.price+'</p><p><b>Color: </b>'+manproduct.color+'</p></div></div>';





  },
  productcardsp: function(productname){
    this.listproductp(productname);
  },
  listproductp: function(productname){
    switch (productname){
      case "Samsung s10":
        product = new Product(productname , "Samsung s10");
        ebayproduct= new SellerProduct(productname, "Samsung s10", "2019", 990, "white","ebay","Good","dolor summis velit fore aliqua illum export quorum enim quem elit quae eram fore cillum quid malis multos amet");
        amazonproduct= new SellerProduct(productname, "Samsung s10", "2020", 1000, "blackk","ebay","Good","quid labore amet eram malis aliqua export malis quis sint esse quis summis elit quis malis veniam minim illum");
        optusproduct= new SellerProduct(productname, "Samsung s10", "2020", 1100, "black","optus","Brand New","quem legam esse aliqua amet noster summis eram quorum ipsum multos summis quis anim tamen expoelit summis dolor quis");
      break;
      case "Iphone X":
        product = new Product(productname , "Iphone X");
        ebayproduct= new SellerProduct(productname, "Iphone X", "2019", 990, "white","ebay","Meh","esse aute amet sunt dolor dolor sunt eram multos quae quae labore summis tempor nulla irure elit dolore quid sunt");
        amazonproduct= new SellerProduct(productname, "Iphone X", "2020", 1000, "blackk","amazon","Okay","cillum nisi dolor veniam minim anim export tamen aliqua legam sunt dolore aliqua malis labore magna eram labore dolor noster");
        optusproduct= new SellerProduct(productname, "Iphone X", "2020", 1100, "black","optus","Crack On Side","malis aute quis multos sunt fore anim esse ipsum esse illum velit duis minim  esse nisi illum illum sunt quid");
      break;
    }
    let getinterfacep= document.querySelector(".interfacep");
    getinterfacep.innerHTML = '<h3><a href="smartphones.html">Back</a></h3><img src="img/electronics/'+ productname.toLowerCase()
     +'.png" class="imagescan"><div><h3>'+ productname +'</h3><div class="row mt-2 py-3 px-2 bg-secondary" id="swtwala"><div  class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>SweetWater<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselectp(1)">Add for comparison</button></h4><img src="img/electronics/ebay/'+ productname.toLowerCase()
      +'.png" class="imagessub"><div class="sellersub"><p> <b>Ebay Price:</b> $'+
     ebayproduct.price+'</p><p><b>Color: </b>'+ebayproduct.color+'</p></div></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Reverb<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselectp(2)">Add for comparison</button></h4><img src="img/electronics/amazon/'+ productname.toLowerCase()
      +'.png" class="imagessub"><p><b> Amazon Price:</b> $'+
     amazonproduct.price+'</p><p><b>Color: </b>'+amazonproduct.color+'</p></div><div class="col-sm-3 mx-2 my-1" style="background-color:lavender;"><h4>Manny<button class="btn btn-danger btn-block addItemBtn" onclick="Catalogue.compareselectp(3)">Add for comparison</button></h4><img src="img/electronics/optus/'+ productname.toLowerCase()
      +'.png" class="imagessub"><p> <b>Optus Price:</b> $'+
     optusproduct.price+'</p><p><b>Color: </b>'+optusproduct.color+'</p></div></div>';


  },



   compareselect: function(sellerno){

    let mylist= document.querySelector("#comp-list");
    let i= mylist.rows.length;
    if (i > 2) {
            alert('no more than 3  items allowed');
            return
          }

    let row= document.createElement('tr');
    switch(sellerno){
      case 1:
       row.innerHTML='<td>1</td><td>'+swtproduct.seller+'</td><td>'+swtproduct.price+'</td>';
       mylist.appendChild(row);
      break;
      case 2:
       row.innerHTML='<td>2</td><td>'+rebproduct.seller+'</td><td>'+rebproduct.price+'</td>';
       mylist.appendChild(row);
      break;
      case 3:
       row.innerHTML='<td>3</td><td>'+manproduct.seller+'</td><td>'+manproduct.price+'</td>';
       mylist.appendChild(row);
      break;



   }

 },
 compareselectp: function(sellerno){

  let mylist= document.querySelector("#comp-list");
  let i= mylist.rows.length;
  if (i > 2) {
          alert('no more than 3  items allowed');
          return
        }

  let row= document.createElement('tr');
  switch(sellerno){
    case 1:
     row.innerHTML='<td>1</td><td>'+ebayproduct.seller+'</td><td>'+ebayproduct.price+'</td>';
     mylist.appendChild(row);
    break;
    case 2:
     row.innerHTML='<td>2</td><td>'+amazonproduct.seller+'</td><td>'+amazonproduct.price+'</td>';
     mylist.appendChild(row);
    break;
    case 3:
     row.innerHTML='<td>3</td><td>'+optusproduct.seller+'</td><td>'+optusproduct.price+'</td>';
     mylist.appendChild(row);
    break;



 }

},
  fullcompare: function(){
    let mero= document.querySelector("#interfacef");
    let mytable= document.querySelector(".merotable");
    let columns= document.createElement('div');
    columns.setAttribute('class','note');
    let columnr= document.createElement('div');
    columnr.setAttribute('class','note');
    let columnm= document.createElement('div');
    columnm.setAttribute('class','note');
    mero.innerHTML='<div><a href="guitars.html">Back</p></a></div><div class="note"><ul><li><b>Seller</b></li><li><b>Price<b/></li><li><b>Manufacturer</b></li><li><b>Date</b></li><li><b>Color</b></li><li><b>Condition</b></li><li><b>Description</b></li></ul></div>'
    if(mytable.rows.length == 1){
        return;
      }
    for (var i = 1; i < mytable.rows.length; i++) {
     var firstCol = mytable.rows[i].cells[0].innerHTML;
     if (firstCol == 1){
       columns.innerHTML='<div><ul><li>'+swtproduct.seller+'</li><li>$ '+swtproduct.price+'</li><li>'+swtproduct.manufacturer+'</li><li>'+swtproduct.date+'</li><li>'+swtproduct.color+'</li><li>'+swtproduct.condition+'</li><li>'+swtproduct.descp+'</li></ul></div>';
        mero.appendChild(columns);
     }
     if (firstCol== 2){
       columnr.innerHTML='<div><ul><li>'+rebproduct.seller+'</li><li>$ '+rebproduct.price+'</li><li>'+rebproduct.manufacturer+'</li><li>'+rebproduct.date+'</li><li>'+rebproduct.color+'</li><li>'+rebproduct.condition+'</li><li>'+rebproduct.descp+'</li></ul></div>';
        mero.appendChild(columnr);
     }
     if (firstCol== 3){
       columnm.innerHTML='<div><ul><li>'+manproduct.seller+'</li><li>$ '+manproduct.price+'</li><li>'+manproduct.manufacturer+'</li><li>'+manproduct.date+'</li><li>'+manproduct.color+'</li><li>'+manproduct.condition+'</li><li>'+manproduct.descp+'</li></ul></div>';
          mero.appendChild(columnm);
     }


   }



 },
 fullcomparep: function(){
   let mero= document.querySelector("#interfacef");
   let mytable= document.querySelector(".merotable");
   let columns= document.createElement('div');
   columns.setAttribute('class','note');
   let columnr= document.createElement('div');
   columnr.setAttribute('class','note');
   let columnm= document.createElement('div');
   columnm.setAttribute('class','note');
   mero.innerHTML='<div><a href="smartphones.html">Back</p></a></div><div class="note"><ul><li><b>Seller</b></li><li><b>Price<b/></li><li><b>Manufacturer</b></li><li><b>Date</b></li><li><b>Color</b></li><li><b>Condition</b></li><li><b>Description</b></li></ul></div>'
   if(mytable.rows.length == 1){
       return;
     }
   for (var i = 1; i < mytable.rows.length; i++) {
    var firstCol = mytable.rows[i].cells[0].innerHTML;
    if (firstCol == 1){
      columns.innerHTML='<div><ul><li>'+ebayproduct.seller+'</li><li>$ '+ebayproduct.price+'</li><li>'+ebayproduct.manufacturer+'</li><li>'+ebayproduct.date+'</li><li>'+ebayproduct.color+'</li><li>'+ebayproduct.condition+'</li><li>'+ebayproduct.descp+'</li></ul></div>';
       mero.appendChild(columns);
    }
    if (firstCol== 2){
      columnr.innerHTML='<div><ul><li>'+amazonproduct.seller+'</li><li>$ '+amazonproduct.price+'</li><li>'+amazonproduct.manufacturer+'</li><li>'+amazonproduct.date+'</li><li>'+amazonproduct.color+'</li><li>'+amazonproduct.condition+'</li><li>'+amazonproduct.descp+'</li></ul></div>';
       mero.appendChild(columnr);
    }
    if (firstCol== 3){
      columnm.innerHTML='<div><ul><li>'+optusproduct.seller+'</li><li>$ '+optusproduct.price+'</li><li>'+optusproduct.manufacturer+'</li><li>'+optusproduct.date+'</li><li>'+optusproduct.color+'</li><li>'+optusproduct.condition+'</li><li>'+optusproduct.descp+'</li></ul></div>';
         mero.appendChild(columnm);
    }


  }



},

}
