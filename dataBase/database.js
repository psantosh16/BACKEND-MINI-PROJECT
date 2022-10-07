// RULES ==>
// [] array
// {} objects
// {id: , name: "" , price: "" , imgUrl: "" },  <===== this
//____________________________________________________________________
//
// Note: (1) Comma's between every objects and values should be between double inverted commas
//       (2) After every object ther should be an comma after {} , <= see this
//       (3) Every object must have unique id and object properties are caseSensitive
// Thanks for reading :)

// Actual DataBase ==>

const dataBase = [
  
  // Non-veg
  {
    id: 0,
    name: "Octopus Magetta",
    price: "300",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1559070135-f259b369bf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  
  {
    id: 2,
    name: "Chicken Handi",
    price: "250",
    veg:"false",
    imgUrl: "https://recipe52.com/wp-content/uploads/2022/03/chicken-handi-10.jpg",
  },
  
   {
    id: 4,
    name: "Chicken Lollipop",
    price: "180",
    veg:"false",
    imgUrl: "https://gully2gully.com/wp-content/uploads/2022/03/lollipop-gravy.jpg",
  },
  
   {
    id: 6,
    name: "Shawarma",
    price: "110",
    veg:"false",
    imgUrl: "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  
   {
    id: 8,
    name: "Fish Masala",
    price: "320",
    veg:"false",
    imgUrl: "https://media.istockphoto.com/photos/macher-jhol-in-black-bowl-isolated-on-white-indian-cuisine-bengali-picture-id1295772358?b=1&k=20&m=1295772358&s=170667a&w=0&h=6sFsEgh9iiib5yQyXto3mOsM5UgawKSmXSud2JKJi2w=",
  },
  
   {
    id: 10,
    name: "Butter Chicken",
    price: "350",
    veg:"false",
    imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg",
  },
  
    {
    id: 12,
    name: "Fried Rice",
    price: "180",
    veg:"false",
    imgUrl: "https://healthynibblesandbits.com/wp-content/uploads/2019/04/Chicken-Fried-Rice-FF.jpg",
  },
  
  
  {
    id: 14,
    name: "Prawn Curry",
    price: "260",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJhd24lMjBjdXJyeXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  
   {
    id: 16,
    name: "Chicken Wings",
    price: "210",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1625937759420-26d7e003e04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  
   {
    id: 18,
    name: "Shrimp Fry",
    price: "300",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1625943555419-56a2cb596640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hyaW1wJTIwZnJ5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60",
  },
  
  {
    id: 20,
    name: "Chicken Burger",
    price: "160",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGJ1cmdlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  
    
  {
    id: 22,
    name: "Hyderabadi Biryani",
    price: "220",
    veg:"false",
    imgUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Chicken-Biryani-2-3.jpg",
  },
  
   {
    id: 24,
    name: "Salmon Prawn Risotto",
    price: "240",
    veg:"false",
    imgUrl: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
  },
  
   {
    id: 26 ,
    name: "Vanilla Fugde",
    price: "100",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1618581260815-9371027b9516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWNlJTIwY3JlYW18ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
  },
  
   
     {
    id: 28 ,
    name: "Milk Shake",
    price: "140",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsayUyMHNoYWtlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
  },
  
     {
    id: 30 ,
    name: "Coca Cola",
    price: "40",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1514178255089-603d3a35b24a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMGRyaW5rc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", 
  },
  
     {
    id:32 ,
    name: "Raspberry Martini",
    price: "80",
    veg:"false",
    imgUrl: "https://images.unsplash.com/photo-1543363950-c78545037afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGRyaW5rc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60", 
  },
  
  
  
  
  
  
  
  
  
// Veg   
   {
    id: 1,
    name: "Pav Bhaji",
    price: "120",
    veg:"true",
    imgUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe-500x500.jpg"
   },
  
  {
    id: 3,
    name: "Mixed Fruit Salad",
    price: "290",
    veg:"true",
    imgUrl: "https://images.pexels.com/photos/10480245/pexels-photo-10480245.jpeg?auto=compress&cs=tinysrgb&w=600"
   },
  
  {
    id: 5,
    name: "Vegan Lasagna",
    price: "325",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg"
   },
  
  {
    id: 7,
    name: "Creamy Tomato Soup",
    price: "99",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg"
   },
  
  {
    id: 9,
    name: "Chocolate Caramel Crispy",
    price: "200",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/1550442508.jpg"
   },
  
  {
    id: 11,
    name: "Dal Fry",
    price: "120",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg"
   },
  
  {
    id: 13,
    name: "Strawberry Rhubarb Pie",
    price: "225",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg"
   },
  
  {
    id: 15,
    name: "Sushi",
    price: "190",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg"
   },
  
  {
    id: 17,
    name: "Moroccan Carrot Soup",
    price: "120",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg"
   },
  
  {
    id: 19,
    name: "Hot Chocolate Fudge",
    price: "120",
    veg:"true",
    imgUrl: "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg"
   },
   
    {
    id: 21,
    name: "Vada pav",
    price: "25",
    veg:"true",
    imgUrl: "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg"
   },
   
   
    {
    id: 23,
    name: "Paneer Butter Masala",
    price: "250",
    veg:"true",
    imgUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg"
   },
   
   
    {
    id: 25,
    name: " Cucumber Raita",
    price: "160",
    veg:"true",
    imgUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2011/09/cucumber-raita-recipe-1.jpg"
   },
   
    {
    id: 27,
    name: "Aloo Chat",
    price: "70",
    veg:"true",
    imgUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-chaat-recipe.jpg"
   },
  
    {
    id: 29,
    name: "Samosa",
    price: "40",
    veg:"true",
    imgUrl: "https://static.toiimg.com/thumb/55453664.cms?imgsize=317782&width=800&height=800"
   },
  
    {
    id: 31,
    name: "Tandoori Roti",
    price: "25",
    veg:"true",
    imgUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Tandoori-Roti-2-3.jpg"
   },
  
    {
    id: 33,
    name: "Butter Naan",
    price: "25",
    veg:"true",
    imgUrl: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan-500x500.jpg"
   },
  
  {
    id: 35,
    name: "Ukadiche Modak",
    price: "110",
    veg:"true",
    imgUrl: "https://1.bp.blogspot.com/-wD7L8Mnkr-8/YTZAFkln53I/AAAAAAAAsMU/SFtadaxgpvU43pmPWNsCfjrkrkns6kk9gCLcBGAsYHQ/s2048/Ukadiche%2BModak%2Bblog%2Bpic9.jpg"
   },
  
  {
    id: 37,
    name: "Motichur Ladoo",
    price: "110",
    veg:"true",
    imgUrl: "https://www.bigbasket.com/media/uploads/p/l/800451461_1-laddoos-sweets-special-motichur-ladoo.jpg"
   },
  
    {
    id: 39,
    name: "Idli Sambar",
    price: "50",
    veg:"true",
    imgUrl: "https://www.spiceindiaonline.com/wp-content/uploads/2020/04/Bombay-Sambar-15.jpg"
   },
 
    {
    id: 41,
    name: "Sandwich",
    price: "30",
    veg:"true",
    imgUrl: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800"
   },
  
    {
    id: 43,
    name: "Manchurian",
    price: "25",
    veg:"true",
    imgUrl: "https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg"
   },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
];

export default dataBase;
