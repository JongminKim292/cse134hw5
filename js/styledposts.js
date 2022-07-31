var addButtonTarget = document.getElementById('addButton');
var postingDialog = document.getElementById('originalDialog');
var cancelButtonTarget = document.getElementById('cancelBtn');
// this add in dialog
var addBtnTarget = document.getElementById('addBtn');
//
var summaryTarget = document.getElementById('summary');
var titleTarget = document.getElementById('title');
var dateTarget = document.getElementById('date');
var postingListTarget = document.getElementById('postingList');
var deleteDialog = document.getElementById('deleteDialog');
var deleteButton = document.getElementById('deleteConfirm')
var deleteCancelButton = document.getElementById('noDeleteConfirm');
var editPostingDialogTarget = document.getElementById('editDialog');
var editBtnTarget = document.getElementById('editBtn');
var editCancelBtnTarget = document.getElementById('editCancelBtn');

function showAddDialog(){
  postingDialog.showModal();
  titleTarget.value = "";
  //current date
  var date = new Date();
  dateTarget.value = `${date.getFullYear()}-${date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth()+1)}-${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}`
  summaryTarget.value = "";
  if(cancelButtonTarget){
    cancelButtonTarget.addEventListener('click',function closeAndNotSave(){
      postingDialog.close();
    })
  }  
}

if(addBtnTarget){
  addBtnTarget.addEventListener('click',function closeAndParse(){
    if(!titleTarget.value){
      alert('title is required');
    }
    else{
      var list = document.createElement('li');
      postingListTarget.appendChild(list);
      list.innerHTML = `<div class="postingDiv"><h3>${titleTarget.value}</h3><p class="postingDate">${dateTarget.value}</p><p>${summaryTarget.value}</p><i class="fa-solid fa-pen-to-square webIcons"></i><i class="fa-solid fa-trash-can webIcons"></i><br></div>`;  
      var editItem = list.firstChild.lastChild.previousSibling.previousSibling;
      var deleteItem= list.firstChild.lastChild.previousSibling;
      postingDialog.close();
    }

    deleteItem.addEventListener('click', function(){
        deleteDialog.showModal();
        deleteButton.addEventListener('click',function(){
            postingListTarget.removeChild(list);
            deleteDialog.close();
            });
            deleteCancelButton.addEventListener('click',function(){
            deleteDialog.close();
            })
    });
   
    
    editItem.addEventListener('click',function(){
      editPostingDialogTarget.showModal();
        var editTitle = document.getElementById('changedTitle');
        var editDate = document.getElementById('changedDate');
        var editSummary = document.getElementById('changedSummary');
        editTitle.value = this.parentNode.firstChild.innerText;
        editDate.value = this.parentNode.firstChild.nextSibling.innerText;
        editSummary.value = this.parentNode.firstChild.nextSibling.nextSibling.innerText;
        editBtnTarget.addEventListener('click',function(){
            list.innerHTML = `<div class="postingDiv"></div>`;
            //<button>X</button><h3>${editTitle.value}</h3><p class="postingDate">${editDate.value}</p><p>${editSummary.value}</p><button>edit</button>
            var childTitle = document.createElement('h3');
            childTitle.innerHTML=editTitle.value;
            list.firstChild.appendChild(childTitle);
            var childDate = document.createElement('p');
            childDate.setAttribute("class","postingDate");
            childDate.innerHTML = editDate.value;
            list.firstChild.appendChild(childDate);
            var childSummary = document.createElement('p');
            childSummary.innerHTML = editSummary.value;
            list.firstChild.appendChild(childSummary);
            list.firstChild.appendChild(editItem);
            list.firstChild.appendChild(deleteItem);
            list.firstChild.appendChild(document.createElement('br'));
            editPostingDialogTarget.close();
        })
        editCancelBtnTarget.addEventListener('click',function(){
          editPostingDialogTarget.close();
        })
    });

  });  
}


 

if(addButtonTarget){
  addButtonTarget.addEventListener('click',showAddDialog);
}
