const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btncafeAmericano = document.querySelector('.cafeAmericano');
const btncafeCapuchino = document.querySelector('.cafeCapuchino');
const btncafeLeche = document.querySelector('.cafeLeche');
const btncafeExpreso = document.querySelector('.cafeExpreso');
const contenedorBebidas = document.querySelector('.bebidas');
document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
    bebidas();
});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}


const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
} 

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    
    //(Esta es una de las maneras de resolver el problema del boton de cerrar)
    //while(navegacion.children[4]){
    //    navegacion.removeChild(navegacion.children[4]);
    //}
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);
        }
    });
});


imagenes.forEach(imagen=>{
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        //(La siguiente manera es para hacer que desaparesca el boton cerrar)
        boton.remove();
    })
    
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar'); 
        boton.remove();
    }
}

//botones
const bebidas = () =>{
    let bebidasArreglo = [];
    const bebidas = document.querySelectorAll('.bebida');
    
    bebidas.forEach(bebida=> bebidasArreglo = [...bebidasArreglo, bebida])
    
    const cafeAmericanos = bebidasArreglo.filter(cafeAmericano=> cafeAmericano.getAttribute('data-bebida') === 'cafeAmericano'); 
    const cafeCapuchinos = bebidasArreglo.filter(cafeCapuchino=> cafeCapuchino.getAttribute('data-bebida') === 'cafeCapuchino'); 
    const cafeLeches = bebidasArreglo.filter(cafeLeche=> cafeLeche.getAttribute('data-bebida') === 'cafeLeche');
    const cafeExpresos = bebidasArreglo.filter(cafeExpreso=> cafeExpreso.getAttribute('data-bebida') === 'cafeExpreso');
    
    monstrarBebidas(cafeAmericanos, cafeCapuchinos, cafeLeches, cafeExpresos, bebidasArreglo);
}

const monstrarBebidas = (cafeAmericanos, cafeCapuchinos, cafeLeches, cafeExpresos, todos) =>{
    btncafeAmericano.addEventListener('click', ()=>{
        limpiarHtml(contenedorBebidas);
        cafeAmericanos.forEach(cafeAmericano=> contenedorBebidas.appendChild(cafeAmericano));
    });
    
     btncafeCapuchino.addEventListener('click', ()=>{
        limpiarHtml(contenedorBebidas);
        cafeCapuchinos.forEach(cafeCapuchino=> contenedorBebidas.appendChild(cafeCapuchino));
    });
    
     btncafeLeche.addEventListener('click', ()=>{
        limpiarHtml(contenedorBebidas);
        cafeLeches.forEach(cafeLeche=> contenedorBebidas.appendChild(cafeLeche));
    });
    
     btncafeExpreso.addEventListener('click', ()=>{
        limpiarHtml(contenedorBebidas);
        cafeExpresos.forEach(cafeExpreso=> contenedorBebidas.appendChild(cafeExpreso));
    });
    
     btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorBebidas);
        todos.forEach(todo=> contenedorBebidas.appendChild(todo));
     });
    
   
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

    
   








