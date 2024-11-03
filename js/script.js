const allBtn = document.getElementsByClassName('btn')
// console.log(allBtn)
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        // Name
        const name = event.target.parentNode.childNodes[1].innerText
        // price
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText
        // catagory
        const catagory = event.target.parentNode.childNodes[5].childNodes[1].innerText
        // console.log(catagory)
        const selectedElement = document.getElementById('selected-container')

        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-center')
        div.classList.add('space-x-10')
        const p = document.createElement('p');
        p.innerText = name;
        const p2= document.createElement('p');
        p2.innerText = price
        const p3 = document.createElement('p');
        p3.innerText = catagory
        selectedElement.appendChild(div)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)

        // update total and show total
        updateTotalCost(price)
        // update grand total and show grand
        updateGrandTotal();

    })
}

function updateTotalCost(value){
    const value1 = convertValue('total-cost');
    console.log(value1)
    const totalValue = value1 + parseInt(value);
    setInnerText('total-cost',totalValue)
}
function updateGrandTotal(){
    const totalCost = convertValue('total-cost');
    setInnerText('grand-total',totalCost)
}
function setInnerText(id,value){
    const element = document.getElementById(id);
    element.innerText = value;
}
function convertValue(id){
    const elementText = document.getElementById(id).innerText
    const convertValue = parseInt(elementText);
    return convertValue
}