const allBtn = document.getElementsByClassName('btn')
// console.log(allBtn)
let count = 0;
for(const btn of allBtn){
    btn.addEventListener('click',function(event){
        // Name
        const name = event.target.parentNode.childNodes[1].innerText
        // price
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(price)
        // catagory
        const catagory = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(catagory)
        const selectedElement = document.getElementById('selected-container')

        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-center')
        div.classList.add('space-x-10')
        div.classList.add('bg-red-400')
        div.classList.add('p-4')
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

        //disable btn 
        event.target.setAttribute('disabled', true);
        
        // chack cart and left count
        const firstCount = convertValue('cart');
        const firstLeft = convertValue('left')
        if(firstCount + 1 > 6 || firstLeft - 1 < 0){
            alert('your limit end')
            return;
        }
        // chack budget total
        const firstBudget = convertValue('budget');
        const upateBudget = firstBudget - parseInt(price)
        if(upateBudget < 0 ){
            alert('please earn more')
            return;
        }
        
        // background set
        event.target.parentNode.style.backgroundColor = 'gray';

        // cart count
        const countElement = document.getElementById('cart');
        const cartCount = convertValue('cart')
        const cartUpdate = cartCount + 1;
        countElement.innerText = cartUpdate;
        // console.log(cartUpdate)

        // left decrease
        const leftCount = convertValue('left');
        const decLeft = leftCount - 1;
        const leftElement = document.getElementById('left')
        leftElement.innerText = decLeft

        // budget update 
        const budgetValue = convertValue('budget')
        document.getElementById('budget').innerText = budgetValue - parseInt(price)
        // console.log(budgetValue)

    })
}

function updateTotalCost(value){
    const value1 = convertValue('total-cost');
    // console.log(value1)
    const totalValue = value1 + parseInt(value);
    setInnerText('total-cost',totalValue)
}
function updateGrandTotal(status){
    const totalCost = convertValue('total-cost');
    if(status == undefined){
        setInnerText('grand-total',totalCost)
    }
    else{
        const couponCode = document.getElementById('coupon-code').value
        if(couponCode === 'love420'){
            const discounted = totalCost * 20/100;
            // console.log(discounted)
            const discountedTotal = totalCost - discounted;
            const grandTotalELement = document.getElementById('grand-total');
            grandTotalELement.innerText = discountedTotal
        }
        else{
            alert('please enter valid coupon code')
            return;
        }
    }

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