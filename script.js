(function(){
    let btns = document.querySelectorAll('.fury');
let customername = document.querySelector('#name');
let imge = document.querySelector('#image');
let content= document.querySelector('#content')
console.log(btns);
console.log(customername);
// console.log(img);
let customers=[];
let index=0;


function Customerprofile(img,name,content)
{
    this.img=img;
    this.name=name;
    this.content=content;
}

         
function createprofile(img,name,content){
    let Img = `${img}.jpeg`
    let c1 = new Customerprofile(Img,name,content);
   customers.push(c1);

    
}
createprofile(0,'Jhon Cena',` Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste,
alias corporis, amet asperiores animi odio deserunt quae, veritatis
adipisci eum. Hic minus ullam facere veritatis architecto nihil rem
sunt?`)
createprofile(1,'Jhonz Cenaop',` Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste,
alias corporis, amet asperiores animi odio deserunt quae, veritatis
adipisci eum. Hic minus ullam facere veritatis architecto nihil rem
sunt?`)
createprofile(2,'Jhonu Cenay',` Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste,
alias corporis, amet asperiores animi odio deserunt quae, veritatis
adipisci eum. Hic minus ullam facere veritatis architecto nihil rem
sunt?`)
createprofile(3,'Jhony Cenas',` Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste,
alias corporis, amet asperiores animi odio deserunt quae, veritatis
adipisci eum. Hic minus ullam facere veritatis architecto nihil rem
sunt?`)

Array.from(btns).forEach((element)=>[
    element.addEventListener('click',(e)=>{
        if(e.target.matches('.left'))
        {
            if(index===0){
                index=customers.length;
            }
            index--;
            console.log(index)
            imge.src=customers[index].img;
            content.innerHTML=customers[index].content;
            customername.innerHTML=customers[index].name;
        }

        if(e.target.matches('.right'))
        {
            if(index ===customers.length){
                index=0;
            }
            console.log(index)
            imge.src=customers[index].img;
            content.innerHTML=customers[index].content;
            customername.innerHTML=customers[index].name;
            index++;
        }


    })
])


})();
