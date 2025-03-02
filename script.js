//your JS code here. If required.

let box = document.querySelectorAll(".squre")

console.log(box);


for(let t of box){
    t.addEventListener("mouseover", (e)=>{
        // e.target.style.backgroundColor="red"
        let hex = "0123456789ABCDEF"
        let color='#'
        for(let i=0;i<6;i++){
            let randomIndex = Math.floor(Math.random()*hex.length)
    color+=hex[randomIndex]
    }
        
    e.target.style.backgroundColor=color


    setTimeout(()=>{
        e.target.style.backgroundColor="#404444"
    },1000)

    

        
// console.log("click");



    })
}
