const caixa1=document.querySelector('#caixa1')
const caixa2=document.querySelector('#caixa2')
const btn_transferir=document.querySelector('#btn_transferir')
const todosCursos=[...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso=evt.target
        curso.classList.toggle('destaque')
    })
})

btn_transferir.addEventListener('click',()=>{
    const cursosSelecionados=[...document.querySelectorAll('.destaque')]
    const cursosNaoSelecionados=[...document.querySelectorAll('.curso:not(.destaque)')]

    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})