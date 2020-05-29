let ulTasks=$('#ulTasks');
let  btnAdd=$('#btnadd');
let  btnClear=$('#btnclean');
let  btnSort=$('#btnsort');
let  btnDelete=$('#btndelete');
let inpNewTask=$('#inpNewTask');

function addItem()
{
    let x=$('<li>',{
        class:'list-group-item',text:inpNewTask.val()
    });
    // x=$('<li class="list-group-item">'+ inpNewTask.val()+ '</li>');   // last elememt strikethough only
    
    x.click(()=>{
        x.toggleClass('done')          //Event target scene
    })

  ulTasks.append(x);
  inpNewTask.val('')
}

function cleardone()
{
    $('#ulTasks .done').remove();
}
function sort()
{
    $('#ulTasks .done').appendTo(ulTasks);
    
}

btnClear.click(cleardone);

btnAdd.click(addItem);
inpNewTask.keypress((event)=>{
    if(event.which==13) addItem();
})

btnClear.click(()=>{
    inpNewTask.val('');
})

btnSort.click(sort);