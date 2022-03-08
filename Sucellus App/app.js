
let appid = "7976558503180571";

var token = "APP_USR-7976558503180571-030822-c7de8de679abf055264881a8d37d5608-1085234879";

var code = "TG-62252dae99a227001ad586b5-1085234879";

function CreateItem(){

let ItemData = {
            "title":document.getElementById("name").value,
            "category_id":"MLA3530",
            "price":document.getElementById("price").value,
            "currency_id":"ARS",
            "available_quantity":document.getElementById("cant").value,
            "buying_mode":"buy_it_now",
            "condition":"new",
            "listing_type_id":"gold_special",
            "sale_terms":[
               {
                  "id":"WARRANTY_TYPE",
                  "value_name":"Garantía del vendedor"
               },
               {
                  "id":"WARRANTY_TIME",
                  "value_name":"90 días"
               }
            ],
            "pictures":[
               {
                  "source":"http://mla-s2-p.mlstatic.com/968521-MLA20805195516_072016-O.jpg"
               }
            ],
            "attributes":[
               {
                  "id":"BRAND",
                  "value_name":"Marca del producto"
               },
               {
                  "id":"EAN",
                  "value_name":"7898095297749"
               }
            ]
}

    fetch("https://api.mercadolibre.com/items",{
        method:"Post",
        body:JSON.stringify(ItemData),
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
}

function CreateUser(){

    let UserData = {
   	"site_id":"MLA"
}

    fetch("https://api.mercadolibre.com/users/test_user",{
        method:"Post",
        body:JSON.stringify(UserData),
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=> console.table(data))
}

function InfoItem(){

  const ItemID = document.getElementById("ItemID").value

    fetch(`https://api.mercadolibre.com/items/${ItemID}/health`,{
        method:"Get",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
}

function InfoOrder(){

    const OrderID = document.getElementById("OrderID").value

    fetch(`https://api.mercadolibre.com/orders/${OrderID}`,{
        method:"Get",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
}


function AddDescription(){

   	let DescItemID = document.getElementById("ItemDesc").value;
    let Desc =  {
   "plain_text": document.getElementById("descripción").value
}

       fetch(`https://api.mercadolibre.com/items/${DescItemID}/description`,{
        body:JSON.stringify(Desc),
        method:"Post",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.json())
    .then(data=> console.log(data))
	}
