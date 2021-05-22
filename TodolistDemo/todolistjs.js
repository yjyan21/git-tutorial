window.onload = function() {
    var date = document.getElementsByClassName("date")[0]; //don't forget[0]
    var d = new Date();
    var year = d.getFullYear();
    var mon = d.getMonth() + 1; //don't forget +1
    var day = d.getDate();
    date.innerHTML = mon +"-" + day +"-" + year;

    //Notice this project has been finished;
    var btn_finish = document.getElementsByClassName("fa-check-circle");
    for(var i = 0;i < btn_finish.length; i++){
        btn_finish[i].onclick = function(){
            var li_finish = this.parentNode;
            if(li_finish.className == "todoitem"){
                li_finish.className = "todoitem_finish";
            }else{
                li_finish.className = "todoitem";
            }
            
        }
    }

    //clean all of data
    var btn_clean = document.getElementsByClassName("btn_refresh")[0];
    btn_clean.onclick = function(){
        var flag = confirm("Do you want to clean all the data?")
            if(flag == true){
                localStorage.removeItem('todolist');
                //refresh the page
                var ul_item = document.getElementsByClassName("items")[0];
                ul_item.innerHTML = "";
            }
       
    }
     //add new project
    var add = document.getElementsByClassName("fa-plus-circle")[0];
    var todos = JSON.parse(localStorage.getItem('todolist')) || [];
    //alert(todolist);
    todos.forEach(function(value){ //don't forget the (value)
        //将本地存储的数据提取展示
        //var addhtml = document.getElementsByClassName("input_box")[0].value;
        var li = document.createElement("li");
        li.className = "todoitem";
        var li_icon = document.createElement("i");
        li_icon.className = "fas fa-check-circle";
        li.appendChild(li_icon);
        //mark this record has been finished
        li_icon.onclick = function(){
            var li_finish = this.parentNode;
           // li_finish.className = "todoitem_finish";
            if(this.parentNode.className == "todoitem"){
                this.parentNode.className = "todoitem_finish";
            }else{
                this.parentNode.className = "todoitem";
            }
        }
        var li_item = document.createElement("div");
        li_item.className = "item_name";
        li_item.innerHTML = value;
        li.appendChild(li_item);
        var li_del = document.createElement("i");
        li_del.className = "far fa-trash-alt";
        li.appendChild(li_del);
        li_del.onclick = function(){
            var btn_par = this.parentNode;
            var btn_par_sec = btn_par.getElementsByClassName("item_name")[0];
            var flag = confirm("Do you want to delete this record"  + " [ * " + btn_par_sec.innerHTML + " * ] " + "?")
            //This script above shows in servral section,not only,so if you want to change the content,remember change all
            if(flag == true){
                var btn_line = this.parentNode.parentNode;
                btn_line.removeChild(this.parentNode);
            }
            todos.forEach(function(value,index){
                if(value === btn_par_sec.innerHTML){
                    todos.splice(index,1);
                    //console.log(todos);
                }
            })
        }
        var items = document.getElementsByClassName("items")[0];
        items.appendChild(li);
    })
    add.onclick = function(){
        var addhtml = document.getElementsByClassName("input_box")[0].value;
        var li = document.createElement("li");
        li.className = "todoitem";
        var li_icon = document.createElement("i");
        li_icon.className = "fas fa-check-circle";
        li.appendChild(li_icon);
        //mark this record has been finished
        li_icon.onclick = function(){
            var li_finish = this.parentNode;
           // li_finish.className = "todoitem_finish";
            if(this.parentNode.className == "todoitem"){
                this.parentNode.className = "todoitem_finish";
            }else{
                this.parentNode.className = "todoitem";
            }
        }
        var li_item = document.createElement("div");
        li_item.className = "item_name";
        li_item.innerHTML = addhtml;
        li.appendChild(li_item);
        var li_del = document.createElement("i");
        li_del.className = "far fa-trash-alt";
        li.appendChild(li_del);
        li_del.onclick = function(){
            var btn_par = this.parentNode;
            var btn_par_sec = btn_par.getElementsByClassName("item_name")[0];
            var flag = confirm("Do you want to delete this record"  + " [ * " + btn_par_sec.innerHTML + " * ] " + "?")
            //This script above shows in servral section,not only,so if you want to change the content,remember change all
            if(flag == true){
                var btn_line = this.parentNode.parentNode;
                btn_line.removeChild(this.parentNode);
            }
            todos.forEach(function(value,index){
                if(value === btn_par_sec.innerHTML){
                    todos.splice(index,1);
                    //console.log(todos);
                }
            })
        }
        var items = document.getElementsByClassName("items")[0];
        items.appendChild(li);
        document.getElementsByClassName("input_box")[0].value = "Please enter ...";
        todos.push(addhtml);
        //console.log(todos);
        localStorage.setItem('todolist',JSON.stringify(todos));
    }
       //delete exist project
       var btn_del = document.getElementsByClassName("fa-trash-alt");
       for(var i = 0;i < btn_del.length; i++){
         btn_del[i].onclick = function(){
            var btn_par = this.parentNode;
            var btn_par_sec = btn_par.getElementsByClassName("item_name")[0];
            //alert(btn_par_sec.innerHTML);
            var flag = confirm("Do you want to delete this record" + " [ * " + btn_par_sec.innerHTML + " * ] " + " ?")
            if(flag == true){
                var btn_line = this.parentNode.parentNode;
                btn_line.removeChild(this.parentNode);
            }
            todos.forEach(function(value,index){
                if(value === btn_par_sec.innerHTML){
                    todos.splice(index,1);
                    //console.log(todos);
                    localStorage.setItem('todolist',JSON.stringify(todos));
                }
            })
            
        }
       }
}
