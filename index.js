 let arr=[]
 document.getElementById("addButton").addEventListener("click",(e)=>{
    let data =parseInt(document.getElementById("input").value)

    arr.push(data)

 })
 console.log(arr)