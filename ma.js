let count=0
const countDisplay=document.getElementById('count')
const entry=document.getElementById('previous entries')
let entires=[]
function increment(){
    count++
    countDisplay.innerText=count
}
function save(){
    entires.push(count)
    entry.textContent='Previous Entries: '+ entires.join('-')
    count=0
    countDisplay.innerText=count
}
