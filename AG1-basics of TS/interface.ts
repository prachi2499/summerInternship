// function showtodo(todo:{title:string,text:string})
// {

//    console.log(todo.title+": "+todo.text);
// }

// let mytodo={title:"this is title",text:"text"};
// showtodo(mytodo);

interface Todo {
    title:string;
    text:string;
}

function showtodo(todo:Todo)
{
    console.log(todo.title+":"+todo.text);
}
let mytodo={title:"this is title",text:"text"};
showtodo(mytodo);