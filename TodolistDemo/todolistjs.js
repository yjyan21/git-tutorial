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

     //add new project
    var add = document.getElementsByClassName("fa-plus-circle")[0];
    add.onclick = function(){
        var addhtml = document.getElementsByClassName("input_box")[0].value;
        var li = document.createElement("li");
        li.className = "todoitem";
        var li_icon = document.createElement("i");
        li_icon.className = "fas fa-check-circle";
        li.appendChild(li_icon);
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
            if(flag == true){
                var btn_line = this.parentNode.parentNode;
                btn_line.removeChild(this.parentNode);
            }
        }
        var items = document.getElementsByClassName("items")[0];
        items.appendChild(li);
        document.getElementsByClassName("input_box")[0].value = "";
    }
       //delete exist project
       var btn_del = document.getElementsByClassName("fa-trash-alt");
       for(var i = 0;i < btn_del.length; i++){
         btn_del[i].onclick = function(){
            var btn_par = this.parentNode;
            var btn_par_sec = btn_par.getElementsByClassName("item_name")[0];
            //alert(btn_par_sec.innerHTML);
            var flag = confirm("Do you want to delete this record" + " [ " + btn_par_sec.innerHTML + " ] " + " ?")
            if(flag == true){
                var btn_line = this.parentNode.parentNode;
                btn_line.removeChild(this.parentNode);
            }
            
        }
       }
}
