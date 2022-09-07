var task = document.createElement("h1");
task.innerHTML=10;
setTimeout(()=>{
   document.body.append(task);
setTimeout(()=>{
    task.innerHTML--;
        setTimeout(()=>{
            task.innerHTML--;           
            setTimeout(()=>{
                task.innerHTML--;
                setTimeout(()=>{
                    task.innerHTML--;
                    setTimeout(()=>{
                        task.innerHTML--;
                        setTimeout(()=>{
                            task.innerHTML--;
                            setTimeout(()=>{
                                task.innerHTML--;
                                setTimeout(()=>{
                                    task.innerHTML--;
                                    setTimeout(()=>{
                                        task.innerHTML--;
                                        setTimeout(()=>{
                                            task.innerHTML="HAPPY INDEPENDENCE DAY";
                                        },1000)
                                    },1000)                                   
                                },1000)                               
                            },1000)                           
                        },1000)                       
                    },1000)                   
                },1000)           
            },1000)  
        },1000) 
    },1000);  
});




