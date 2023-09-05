const div=document.querySelector('div')
const p=document.querySelector('p')


let fruitsArray=["Kiwi","Grapes","Peach","Orange","Banana","Apple","Watermelon","Lemon","Strawberry","Blueberry"
,"Avocado","javaplum","Guava","Papaya","Mango",]


let fruits=[" Kiwi,"," Grapes,"," Peach,"," Orange,"," Banana,"," Apple,"," Watermelon,"," Lemon,"," Strawberry,"," Blueberry,"," Avocado,"," javaplum,"," Guava,"," Papaya,"," Mango,",]

for (let i = 0; i < fruitsArray.length; i++) {
    div.innerHTML+=`<button class="btn" onclick="print(${[i]})">${fruitsArray[i]}</button>`
    
}


function print(i) {
//    console.log(fruitsArray[i])
 p.innerHTML+= fruits[i]
 }