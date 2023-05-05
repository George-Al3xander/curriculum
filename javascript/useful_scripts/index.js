// More good looking way of getting element by his id
function getById(id) {
    let obj = document.getElementById(id);
    return obj;
}

// More good looking way of getting element by his class
function getByClass(objClass) {
    let obj = document.querySelector(`.${objClass}`)
    return obj;
}


//Function that creates any dom element,it takes two parametrs:
//Type(required) and content(optional)
function createEl(type,content) {
    let obj = document.createElement(type);
    if(content != undefined) {
        let content = document.createTextNode(content);
        obj.appendChild(content);
    }

    return obj
}

//Function that creates input
function createInput(type, name, value) {
    let input = createEl("input","");
    input.setAttribute("type", type);
    input.setAttribute("name", name);

    if(value != undefined) {
        input.setAttribute("value", value);
    }
    
    return input
}