// main menu
const html=document.querySelector('html')
const mainMenu=document.getElementById('main-menu')
const btnStatus=document.querySelector("#status")
const basket=document.querySelector("#basket")
const closed=document.querySelector("#close")
const listCard=document.querySelector("#listCard")
const cart=document.querySelector(".cart")
const total=document.querySelector(".total")
console.log(total);

const countBasket=document.querySelector("#count-basket")





// dark mode
console.log(closed);

btnStatus.addEventListener('click',function(){
    
    html.classList.toggle('dark')
    if(html.className==='dark'){
        
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`
localStorage.setItem('them',JSON.stringify('dark'))   
    
    }
    else if(html.className!=="dark"){
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
localStorage.setItem('them',JSON.stringify('light'))   
        
    }
    
})

window.addEventListener('load',function(){

    let themSite=JSON.parse(localStorage.getItem('them'))
      
    if(themSite==='dark'){
        html.classList.add('dark')
        btnStatus.innerHTML=''
        btnStatus.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`     
    }
    
})

const dataMenu=[{
    id:1,
    name:'Mar pizza',
    price:22,
    Material:'sausage meat, honey,tomato sauce, mozzarella cheese',
    img:`https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg`,  incart:0,
},
{
    id:2,
    name:'Spicy pizza',
    price:21,
    img:`https://realfood.tesco.com/media/images/1400x919-Tabasco-Spicy-sausage-pizza-with-hot-honey-8f6b899b-20dd-46b8-83ba-069aa7b72261-0-1400x919.jpg`,
    Material:'sausage meat, honey,tomato sauce, mozzarella cheese',
    incart:0,
},
{
    id:3,
    name:'Char pizza',
    price:25,
    img:`https://realfood.tesco.com/media/images/1400x919-VegGoatsCheesePizza-2b464562-324e-41d7-a834-c372a1f5d07f-0-1400x919.jpg`,
     Material:'passata,red onion,baby spinach , mozzarella cheese'
,   incart:0,
},
{
    id:4,
    name:'Mexican pizza',
    price:28,
    img:`https://realfood.tesco.com/media/images/HE-SPICYMEXICAN-9caaaca5-6446-4650-bde1-c3901bc54de4-0-472x310.jpg`,
     Material:'olive oil,red chilli,beef mince,avocados'
,   incart:0,
},
{
    id:6,
    name:'Tropical Pizza',
    price:23,
    img:`https://img.freepik.com/free-photo/pepperoni-pizza-with-sausages-cheese-dark-wooden-table_220768-9277.jpg?size=626&ext=jpg`,
     Material:'Chorizo, cheese, pineapple, special sauce'
,   incart:0,
},
{
    id:7,
    name:'Mecaroni Pizza',
    price:21,
    img:`https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=740&t=st=1661842808~exp=1661843408~hmac=c40f0c154036b96b1dba17947c4e4f7c07f40db983106490402bb0b7b6ec452e`,
    Material:'Seasoned meat, Swiss cheese, mushrooms, olives, tomatoes', 
    incart:0,
},
]


function openBasket(){
    cart.style.right='0px'
}
function closeBasket(){
    cart.style.right='-500px'
}
basket.addEventListener('click',openBasket)
closed.addEventListener('click',closeBasket)

let basketcart=JSON.parse(localStorage.getItem('data'))||[]

dataMenu.forEach((item,key)=>{

    let {id,name,price,img,Material,incart}=item
    let search=basketcart.find((x)=>x.id===id) || []
    function initmenu(){
        mainMenu.insertAdjacentHTML('beforeend',`
            <div id='product-id-${id}' class="bg-white dark:bg-slate-900 dark:text-white px-20 py-6 rounded-xl shadow-md text-center relative transition-all ease-in duration-150 hover:scale-105 box-pizza ">
                <div class="ih-item square effect7"><a href="#">
                    <div class="img"><img src=${img} alt="img"></div>
                    <div class="info">
                      <h3>${name}</h3>
                      <p>${Material}</p>
                    </div></a></div>

                <h4 class="font-bold text-2xl mt-6 whitespace-nowrap dark:text-white">${name}</h4>
                <h6 class="dark:text-white">Tasty Food</h6>
                <h6 class="dark:text-white">${price}$</h6>
                <div class="bg-yellow-400 inline-block p-2 rounded-se-xl rounded-es-xl absolute right-0 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                      </svg>
                </div>
                      <div class="flex gap-6 justify-around items-center bg-yellow-400 rounded-md py-2">
        <span class="text-2xl cursor-pointer" onclick="increment(${id})">+</span>
        <span id="${id}" class="text-2xl cursor-pointer">${search.item === undefined?0:search.item}</span>
        <span class="text-2xl cursor-pointer " onclick="discrement(${id})">-</span>
       </div>`)

        }    
        initmenu()
        
    })
    
    function btnClick(event,id){

    
    if(event.target.id==='btnadd'){

        event.target.innerHTML=`
         <div class="flex gap-6 justify-around items-center">
        <span class="text-2xl cursor-pointer" onclick="increment(${id})">+</span>
        <span id="${id}" class="text-2xl cursor-pointer">0</span>
        <span class="text-2xl cursor-pointer " onclick="discrement(${id})">-</span>
       </div>
    `
    increment(id)
    }
        
 

        }
    

    function increment(id){
        let selectedItem = id;
        
        
        search=basketcart.find((x) => x.id === selectedItem)
        
        
        if(search === undefined) {
            basketcart.push({
              id: selectedItem,
              item: 1,
            });
            
          }
           else {
            search.item += 1;
          }
        
          generateCartItems()
          TotalAmount()
        update(selectedItem)
        localStorage.setItem('data',JSON.stringify(basketcart))
        
    }
    
    function discrement(id){
        let selectedItem = id;
        let search = basketcart.find((x) => x.id === selectedItem);
      
        if (search === undefined) return;
        else if (search.item === 0) return;
        else {
          search.item -= 1;
          TotalAmount()
        }

        update(selectedItem)
        TotalAmount()
        basketcart=basketcart.filter((x)=>x.item !==0);
        generateCartItems()
        localStorage.setItem('data',JSON.stringify(basketcart))
        
    }
    let update = (id) => {
        let search = basketcart.find((x) => x.id === id);
        document.getElementById(id).innerHTML = search.item;
        calculation()
        generateCartItems()
        TotalAmount()

    }


    let calculation=()=>{
    
      let countbasketCart=basketcart.map((x)=>x.item).reduce((x,y)=>x+y,0)  
        
       countBasket.innerHTML=countbasketCart
        
    }
    calculation()


    let generateCartItems = () => {
        if (basketcart.length !== 0) {
          basketcart=basketcart.filter((x)=>x.item !==0);
          
          return (listCard.innerHTML = basketcart
            .map((x) => {
                let { id, item } = x;
                
                let search = dataMenu.find((y) => y.id === id) || [];
                let totalprice=item*search.price
                console.log(totalprice);
              return `
                 <li class=" flex flex-auto justify-center items-center gap-3 py-2">
                <div class="w-8/12">
                    <img class="w-full" src="${search.img}">
                </div>
                <div class="dark:text-white">${search.name}</div>
                <div class="dark:text-white">${search.price}</div>
                <div class="flex justify-between items-center gap-2.5 cursor-pointer ">
                    <div class=" p-1  text-red-500 bg-yellow-400 rounded-md dark:text-white  " onclick="discrement(${id})">-</div>
                    <div class="count p-1 bg-yellow-400 rounded-md dark:text-white">${item}</div>
                    <div class=" p-1  text-red-500  bg-yellow-400 rounded-md dark:text-white  "  onclick="increment(${id})">+</div>
                </div>
            </li>
            `;
            })
            .join(""));
        } 
    
      };

      let TotalAmount = () => {
        if (basketcart.length !== 0) {
          let amount = basketcart
            .map((x) => {
              let { item, id } = x;
              let search = dataMenu.find((y) => y.id === id) || [];
      
              return item * search.price;
            })
            .reduce((x, y) => x + y, 0);
            total.innerHTML=amount+"$"
        }}
    generateCartItems()
    TotalAmount()