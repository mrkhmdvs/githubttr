let num=5;
console.log(num);


// const favFruit=[];
// favFruit[0]=prompt('whats ur fav fruit',"")
// favFruit[1]=prompt('whats ur fav fruit',"")
// favFruit[2]=prompt('whats ur fav fruit',"")
// favFruit[3]=prompt('whats ur fav fruit',"")
// favFruit[4]=prompt('whats ur fav fruit',"")
// favFruit[5]=prompt('whats ur fav fruit',"")
// favFruit[6]=prompt('whats ur fav fruit',"")
// favFruit[7]=prompt('whats ur fav fruit',"")
// favFruit[8]=prompt('whats ur fav fruit',"")
// favFruit[9]=prompt('whats ur fav fruit',"")
// favFruit[10]=prompt('whats ur fav frui',"")
// console.log(favFruit)


// const channel=prompt("whats ur fav youtuber");
// console.log("https://youtube.com/"+ channel);
// console.log("https://youtube.com/"+ channel+'/videos');



function oldd(){
    let qst=+prompt('h old are u?', "")
    let hy=1;
    let hyut=qst+hy;
    let gth=alert(`kengi yili yoshiz ${hyut}ga toladi`)
}
oldd()




const age1=+prompt('how old are uuuuuuu?')

if(age1>25){
    console.log('horor')
}else if(age1>18 && age1<25){
    const age=+prompt('yoshiz nechida?',"")
    if(age>=18){
        alert('siz kirishiz mumkun')
    }else{
        alert('sur na')
    }
    console.log('fight')
}else{
    console.log('cartoon mf')
}

const age2=+prompt('how old are u','');


(age2>25) ? console.log('horor') : console.log('tugadi')

const color=prompt('rang','');
switch(color){
    case'red':
    console.log('stop');
    break;
    case'green':
    console.log('gooo');
    break;
    case'yellow':
    console.log('slowly');
    break;
    default:
        console.log('traffic jam')
break;
}
// first
let num3=1;

while(num3<=20){
    console.log(num3);
    num3++
}

let dt=1;

do{
    console.log(dt);
    dt++
}while(dt<=7);


for (i=0;i<10;i++){
    if(i===8){
        break;   //continue 8zi tawab ketadi
    }
    console.log(i)
}









//while option
// let t=0;
// while(t<2){
//     const a=prompt('oxirgi marta korgan serializ?'),
// b=prompt('va uni qanchalik baholisiz?');
// if(a!=null && b!=null && a!="" && b!=""){
// SeriesDb.series[a]=b;
// console.log('Done');
// }else{
//     console.log('Error!');
//     t--
// }
// t++
// }

//do while option
// let t=0;
// do{const a=prompt('oxirgi marta korgan serializ?'),
// b=prompt('va uni qanchalik baholisiz?');
// if(a!=null && b!=null && a!="" && b!=""){
// SeriesDb.series[a]=b;
// console.log('Done');
// }else{
//     console.log('Error!');
//     t--
// }
// t++   
// }while(t<2);
// console.log(SeriesDb)










function calc1(a,b){
    console.log(a+b)
}

calc1(44,66)

function sfn(name, surname){
    console.log(`hello my full name is ${name} ${surname}`);
}

sfn('Muxiddin', 'Mirxamidov');

// func decloration
function calcw(a,b){
    return a+b
};

let all=calcw(7,9);
console.log(all)



// func expression
let func=function() {
    console.log('ure suck')
}

func();


// arrow 

let ior=(a,b)=>{
    console.log(a+b)
}
ior(4,88);

const uyu=[1,2,3,4,5,6,7,89,]
console.log(uyu.length)
console.log(uyu[7])

uyu[4]='d';
console.log(uyu)

const user='muxiddin';
console.log(user.length)
console.log(user[5])
console.log(user.toUpperCase()) 
let up=user.toUpperCase();
console.log(up);
console.log(user.indexOf('a'));
console.log(user.slice(4));
console.log(user.substring(0,5));
console.log(user.substr(6,5));



//lowercase,to string,indexof,slice(it means cutting),substring(similar with slice), substr (это короче братишка этих парней первый значние начинает второй типо до) 


const num11=8.3;
console.log(Math.round(num11))

const er='13.8px'
console.log(parseInt(er))
console.log(parseFloat(er))


//math.round(округлит номер),parseint(cholo soni eng minimal ga tuwuradi)parsefloat bu koroche texti soni chqazb beradi



let numberOfSerie;

function sApp(){
    numberOfSerie =+prompt('Nechta serial korgansiz?', "" );

    while(
        numberOfSerie=="" ||
        numberOfSerie==null ||
        isNaN(numberOfSerie)
    ){
        numberOfSerie =+prompt('Nechta serial korgansiz?', "" );
    }
}
 sApp();

const SeriesDb={
    count:numberOfSerie,
    series:{},
    actors:{},
    genres:[],
    private:false,
};

function Myseries(){
    
    for(i=0;i<2;i++){
    const a=prompt('oxirgi marta korgan serializ?'),
    b=prompt('va uni qanchalik baholisiz?');
    if(a!=null && b!=null && a!="" && b!=""){
    SeriesDb.series[a]=b;
    console.log('Done');
    }else{
        console.log('Error!');
        i--
    }
    }

}
 Myseries();

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

function numSerRate(countz){
    if(countz<5){
        console.log('kamu ukam')
    }else if(countz >=5 && countz<10){
        console.log('normku uka')
    }else if(countz>=10){
        console.log('wuncha vohta maraz')
    }else{
        console.log('error')
    }
}
 numSerRate(SeriesDb.count);
 
function xuyo(){
    let error=('404 page is not found')
    if(SeriesDb.private !=true){
        console.log(SeriesDb);
    }else{console.log(error)
        
    }
}

xuyo();
 
//tepadi xuyo functionikamro varianti
// function shdb(){
//     if(!SeriesDb.private){
//         console.log(SeriesDb);
//     }
// }

// shdb()


// 2 variant
// function shdb(hidden){
//     if(!hidden){
//         console.log(SeriesDb.private)
//     }
// }

// shdb(SeriesDb.private)


function wGenres(){
    for(i=0;i<=2;i++){
        let ask=prompt(`ur fav genres ${i+1}`);
        SeriesDb.genres[i]=ask
    }
}
wGenres();


function edu(subject,callback){
    console.log(`i will teach u${subject}`);
    callback();
}

function done(){
    console.log('GREAT MF')
}

edu('JS',done)

















































