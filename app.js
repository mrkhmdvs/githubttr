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






let qst=prompt('h old are u?', "")

let gth=alert(`sizi yashiz ${qst}`)

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
}while(dt<=20);


for (i=0;i<10;i++){
    if(i===8){
        break;   //continue 8zi tawab ketadi
    }
    console.log(i)
}

let numberOfSerie=+prompt('Nechta oyin kordingiz?', "" );


const SeriesDb={
    count:numberOfSerie,
    series:{},
    actors:{},
    genres:[],
    private:false,
};






for(i=0;i<2;i++){
const a=prompt('oxirgi marta korgan serializ?'),
b=prompt('va uni qanchalik baholisiz?');
if(a!=null && b!=null && a!="" && b!=""){
SeriesDb.series[a]=b;
console.log('Done')
}
}
console.log(SeriesDb)
      
















































