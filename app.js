// let num=5;
// console.log(num);


// // const favFruit=[];
// // favFruit[0]=prompt('whats ur fav fruit',"")
// // favFruit[1]=prompt('whats ur fav fruit',"")
// // favFruit[2]=prompt('whats ur fav fruit',"")
// // favFruit[3]=prompt('whats ur fav fruit',"")
// // favFruit[4]=prompt('whats ur fav fruit',"")
// // favFruit[5]=prompt('whats ur fav fruit',"")
// // favFruit[6]=prompt('whats ur fav fruit',"")
// // favFruit[7]=prompt('whats ur fav fruit',"")
// // favFruit[8]=prompt('whats ur fav fruit',"")
// // favFruit[9]=prompt('whats ur fav fruit',"")
// // favFruit[10]=prompt('whats ur fav frui',"")
// // console.log(favFruit)


// // const channel=prompt("whats ur fav youtuber");
// // console.log("https://youtube.com/"+ channel);
// // console.log("https://youtube.com/"+ channel+'/videos');



// function oldd(){
//     let qst=+prompt('h old are u?', "")
//     let hy=1;
//     let hyut=qst+hy;
//     let gth=alert(`kengi yili yoshiz ${hyut}ga toladi`)
// }
// oldd()




// const age1=+prompt('how old are uuuuuuu?')

// if(age1>25){
//     console.log('horor')
// }else if(age1>18 && age1<25){
//     const age=+prompt('yoshiz nechida?',"")
//     if(age>=18){
//         alert('siz kirishiz mumkun')
//     }else{
//         alert('sur na')
//     }
//     console.log('fight')
// }else{
//     console.log('cartoon mf')
// }

// const age2=+prompt('how old are u','');


// (age2>25) ? console.log('horor') : console.log('tugadi')

// const color=prompt('rang','');
// switch(color){
//     case'red':
//     console.log('stop');
//     break;
//     case'green':
//     console.log('gooo');
//     break;
//     case'yellow':
//     console.log('slowly');
//     break;
//     default:
//         console.log('traffic jam')
// break;
// }
// // first
// let num3=1;

// while(num3<=20){
//     console.log(num3);
//     num3++
// }

// let dt=1;

// do{
//     console.log(dt);
//     dt++
// }while(dt<=7);


// for (i=0;i<10;i++){
//     if(i===8){
//         break;   //continue 8zi tawab ketadi
//     }
//     console.log(i)
// }









// //while option
// // let t=0;
// // while(t<2){
// //     const a=prompt('oxirgi marta korgan serializ?'),
// // b=prompt('va uni qanchalik baholisiz?');
// // if(a!=null && b!=null && a!="" && b!=""){
// // SeriesDb.series[a]=b;
// // console.log('Done');
// // }else{
// //     console.log('Error!');
// //     t--
// // }
// // t++
// // }

// //do while option
// // let t=0;
// // do{const a=prompt('oxirgi marta korgan serializ?'),
// // b=prompt('va uni qanchalik baholisiz?');
// // if(a!=null && b!=null && a!="" && b!=""){
// // SeriesDb.series[a]=b;
// // console.log('Done');
// // }else{
// //     console.log('Error!');
// //     t--
// // }
// // t++   
// // }while(t<2);
// // console.log(SeriesDb)










// function calc1(a,b){
//     console.log(a+b)
// }

// calc1(44,66)

// function sfn(name, surname){
//     console.log(`hello my full name is ${name} ${surname}`);
// }

// sfn('Muxiddin', 'Mirxamidov');

// // func decloration
// function calcw(a,b){
//     return a+b
// };

// let all=calcw(7,9);
// console.log(all)



// // func expression
// let func=function() {
//     console.log('ure suck')
// }

// func();


// // arrow 

// let ior=(a,b)=>{
//     console.log(a+b)
// }
// ior(4,88);

// const uyu=[1,2,3,4,5,6,7,89,]
// console.log(uyu.length)
// console.log(uyu[7])

// uyu[4]='d';
// console.log(uyu)

// const user='muxiddin';
// console.log(user.length)
// console.log(user[5])
// console.log(user.toUpperCase()) 
// let up=user.toUpperCase();
// console.log(up);
// console.log(user.indexOf('a'));
// console.log(user.slice(4));
// console.log(user.substring(0,5));
// console.log(user.substr(6,5));



// //lowercase,to string,indexof,slice(it means cutting),substring(similar with slice), substr (это короче братишка этих парней первый значние начинает второй типо до) 


// const num11=8.3;
// console.log(Math.round(num11))

// const er='13.8px'
// console.log(parseInt(er))
// console.log(parseFloat(er))


// //math.round(округлит номер),parseint(cholo soni eng minimal ga tuwuradi)parsefloat bu koroche texti soni chqazb beradi




// function numSerRate(){
//     if(SeriesDb.count<5){
//         console.log('kamu ukam')
//     }else if(SeriesDb.count >=5 && SeriesDb.count<10){
//         console.log('normku uka')
//     }else if(SeriesDb.count>=10){
//         console.log('wuncha vohta maraz')
//     }else{
//         console.log('error')
//     }

// }
//  numSerRate();



// function edu(subject,callback){
//     console.log(`i will teach u${subject}`);
//     callback();    // if we delete this it will not show great mf
// }

// function done(){
//     console.log('GREAT MF')
// }

// edu('JS',done)


// function first(cb){
//     //code
//     setTimeout(()=>{
//         console.log(111);
//         cb();
//     },5000);
// }

// function second(){
//     //code
//     console.log(222);
// }

// first(second);

// let thief={
//     jacket:"black",
//     height:1.7,
//     color:{
//         hair:"white",
//         skin:"black",
//     },
//     escape:function(){
//         console.log('pzds tez')
//     }
// };

// thief.escape()
// let{hair,skin}=thief.color;
// console.log(hair)
// console.log(skin)
// // let tuxum=0;

// //  for(let keys in thief){
// //     tuxum++
// //    if( typeof thief[keys]==='object'){
// //     for(let i in thief[keys]){
// //         console.log(`the object has ${i} with value ${thief[keys][i]}`)
// //     }
// // }else{
// //         console.log(`the object has ${keys} with value ${thief[keys]}`)
// //     }
// // console.log(tuxum)
// // console.log(Object.keys(thief).length);

// // //Мы создаем объект thief, который описывает вора.
// // В объекте thief у нас есть несколько свойств: jacket, height и color. color также является объектом, содержащим дополнительные характеристики: hair и skin.
// // Мы используем цикл for...in для перебора всех свойств объекта thief.
// // Внутри цикла мы проверяем, является ли текущее значение свойства объектом.
// // Если значение свойства является объектом, мы снова используем цикл for...in для перебора его свойств.
// // В каждой итерации мы выводим в консоль сообщение о том, какие свойства содержатся в объекте thief и их значения.
// // Таким образом, этот код позволяет нам перебирать все свойства объекта thief и выводить информацию о каждом свойстве и его значении.


// const arr=[1,2,3,4,5,6,7,8,9,5,3,43,5,4,467,68,65,433,]

// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]) // это показывает все данные массива
// // }

// //for in object, for of loop 

// // for(let value of arr){
// //     console.log(value) //такая же тема как прошлый раз вы можете увидеть на верху
// // }


// arr.forEach( function(item,index,arr){
//     console.log(`${index}: ${item} from array ${arr}`)
// })


// // clone es6

// let obj={
//     name:'muxiddin',
//     surname:'mirxamidov',
// }
// obj.name='Mirmuxiddin'
// console.log(obj)

// let ayt=[1,2,3,4,5,56,7,]

// const cobj=[...ayt,9999999999];


// console.log(cobj)



// OOP//
// const car={
//     motor:'x',
//     color:'red',
//     logo:'mercedes',
//     lyuk:true,
//     speed:function(){
//         console.log(320)
//     }
// }

// const gm={
//     speed:120
// }
// Object.setPrototypeOf(gm, car)

// console.log(gm)


// let bmw=Object.create(car)
// console.log(bmw)












    
    
//     const SeriesDb={
//         count:0,
//         series:{},
//         actors:{},
//         genres:[],
//         private:false,
//         start: ()=>{
//             SeriesDb.count=+prompt('Nechta serial korgansiz?', "" );
    
//             while(
//                 SeriesDb.count=="" ||
//                 SeriesDb.count==null ||
//                 isNaN(SeriesDb.count)
//                 ){
//                     SeriesDb.count =+prompt('Nechta serial korgansiz?', "" );
//             }
//         }
//     };
    
//     function Myseries(){
        
//         for(i=0;i<2;i++){
//         const a=prompt('oxirgi marta korgan serializ?'),
//         b=prompt('va uni qanchalik baholisiz?');
//         if(a!=null && b!=null && a!="" && b!=""){
//         SeriesDb.series[a]=b;
//         console.log('Done');
//     }else{
//         console.log('Error!');
//         i--
//         }
//         }
    
//     }
//      Myseries();
     
//      function numSerRate(countz){
//          if(countz<5){
//              console.log('kamu ukam')
//          }else if(countz >=5 && countz<10){
//              console.log('normku uka')
//          }else if(countz>=10){
//              console.log('wuncha vohta maraz')
//          }else{
//              console.log('error')
//          }
//      }
//       numSerRate(SeriesDb.count);
      
//      function xuyo(){
//          let error=('404 page is not found')
//          if(SeriesDb.private !=true){
//              console.log(SeriesDb);
//          }else{console.log(error)
             
//          }
//      }
     
//      xuyo();
//      let vDB =()=>{
//         if(!SeriesDb.private==true){
//             console.lo
//         }
//      }
//      //tepadi xuyo functionikamro varianti
//      // function shdb(){
//      //     if(!SeriesDb.private){
//      //         console.log(SeriesDb);
//      //     }
//      // }
     
//      // shdb()
     
     
//      // 2 variant
//      // function shdb(hidden){
//      //     if(!hidden){
//      //         console.log(SeriesDb.private)
//      //     }
//      // }
     
//      // shdb(SeriesDb.private)
     
     
//      function wGenres(){
//          for(i=0;i<=2;i++){
//              let ask=prompt(`ur fav genres ${i+1}`);
//              SeriesDb.genres[i]=ask
//          }
//      }
//      wGenres();


// const shH=()=>{
//     const heading=document.querySelector('.heading');
//     heading.textContent='ya Allah pls help me'
// }

// const btn=document.querySelector('.butt')
// btn.onclick=shH;

document.addEventListener('keydown', event=>{
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
}) // this is event of keyboard which button we will press it will appear on the console

function sayGreeting(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = {
  name: 'Peter'
};

sayGreeting.call(person, 'Hello'); // Output: Hello, Peter



//замыкание closures
function makeBaker() {
    const secretIngredient = "любовь"; // Эта переменная внутри функции пекаря (кухня)
  
    function bakeCake() {
      console.log("Пеку вкусный торт с " + secretIngredient);
    }
  
    return bakeCake; // Возвращаем внутреннюю функцию (помощник


  
  const myBaker = makeBaker();
  myBaker();


// Асинхронность
console.log('start')
console.log('really?')
setTimeout(function(){
    console.log('yes')
},4000)             //нужно поставитиь ,
console.log('im ready')

// let taskStack = [];

// // Функция для добавления задачи в стек
// function addTask(task) {
//     taskStack.push(task);
//     console.log(`Добавлена новая задача: ${task}`);
// }


// // Функция для завершения задачи (удаления из стека)
// function completeTask() {
//     if (taskStack.length > 0) {
//         let completedTask = taskStack.pop();
//         console.log(`Задача "${completedTask}" завершена и удалена из списка`);
//     } else {
//         console.log('Нет задач для завершения');
//     }
// }

// // Пример использования стека для управления задачами
// addTask('Почистить кухню');
// addTask('Погулять с собакой');
// addTask('Записаться на курс');
// completeTask();
// completeTask();
// completeTask();
// completeTask();
// }
}
let taskStack = [];

// Функция для добавления задачи в стек
function addTask(task) {
  taskStack.push(task);
  console.log(`Добавлена новая задача: ${task}`);
}

// Функция для завершения задачи (удаления из стека)
function completeTask() {
  while (taskStack.length > 0) {
    let completedTask = taskStack.pop();
    console.log(`Задача "${completedTask}" завершена и удалена из списка`);
  }
  if (taskStack.length === 0) {
    console.log('В стеке задач нет элементов');
  }
}

// Пример использования стека для управления задачами
addTask('Почистить кухню');
addTask('Погулять с собакой');
addTask('Записаться на курс');
completeTask();
completeTask();
completeTask();
completeTask();



//CALLBACK
function orderPizza(pizzaType, callback) {
  console.log(`Заказ пиццы: ${pizzaType}`);
  // ... (имитация приготовления пиццы)
  setTimeout(() => {
    callback(`Пицца ${pizzaType} готова!`);
  }, 3000);
}

orderPizza("Маргарита", function(xuyna) {
  console.log(xuyna);
});

//PROMISE
// Создаем Promise, который выполняет асинхронную операцию (здесь имитируется задержка с помощью setTimeout)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
          resolve(randomNumber); // Если случайное число больше 0.5, успешно завершаем Promise
      } else {
          reject(new Error('Number is too low')); // Если число меньше или равно 0.5, отклоняем Promise с ошибкой
      }
  }, 1000); // Имитация асинхронной операции, которая завершится через 1 секунду
});

// Используем Promise с помощью методов then() и catch()
myPromise
  .then((result) => {
      console.log('Promise выполнен успешно:', result); // Выводим результат, если Promise выполнен успешно
  })
  .catch((error) => {
      console.error('Ошибка при выполнении Promise:', error); // Выводим ошибку, если Promise был отклонен
  });
