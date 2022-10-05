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
// imgUrl: "https://imgurl...."  => best option
  },
  
  {
    id: 2,
    name: "Chicken Handi "
    price: "250",
    veg:"false",
    imgUrl: "https://recipe52.com/wp-content/uploads/2022/03/chicken-handi-10.jpg",
  },
  
   {
    id: 4,
    name: "Chicken Lollipop",
    price: "180",
    veg:"false",
    imgUrl: "https://media.istockphoto.com/photos/chicken-lollipop-appetizer-picture-id1090502088?b=1&k=20&m=1090502088&s=170667a&w=0&h=SxvdE0645A4_nQt2ALBnBOJ-EgiXZkSk06yfujXit_0=",
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
    imgUrl: "https://media.istockphoto.com/photos/indian-butter-chicken-picture-id639390540?b=1&k=20&m=639390540&s=170667a&w=0&h=zhF-luTj0uh0zlha-SLuWKG6tiTeyMwnWyIF6H4wON8=",
  },
  
   {
    id: 12,
    name: "Chicken Fried Rice",
    price: "180",
    veg:"false",
    imgUrl: "https://media.istockphoto.com/photos/braised-chicken-in-a-vegetable-tomato-rice-picture-id481711278?b=1&k=20&m=481711278&s=170667a&w=0&h=iENwpigBSyBnrcfKY1L6hnOh85vWqbW0XqIU0BTzyqE=",
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
    price: "240",
    veg:"false",
    imgUrl: "",
  },
  
  
// Veg   
   {
    id: 1,
    name: "Pav Bhaji",
    price: "120",
    veg:"true",
    imgUrl: "https://media.istockphoto.com/photos/masala-pavbhaji-or-pav-bhaji-picture-id800368868?b=1&k=20&m=800368868&s=612x612&w=0&h=DfmVXU81F6JmL15aI8i1JM6R-EOI4G3-JoZp1bYfk10="
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
  
];

export default dataBase;
