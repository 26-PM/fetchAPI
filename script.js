const URL="https://cat-fact.herokuapp.com/facts";

const factPara=document.querySelector(".fact");
const btn=document.querySelector("#btn");

const getFacts=async()=>{
    console.log("Getting Data...")
    let respone=await fetch(URL);
    // console.log(respone.status);
    let data=await respone.json();
    factPara.innerText=data[4].text;
};
btn.addEventListener("click",getFacts);


