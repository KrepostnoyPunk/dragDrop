const boxesEls = document.querySelectorAll('.box')
const imgEl = document.querySelector('.box__img')

boxesEls.forEach((box) => {
    box.addEventListener('dragover', e => {
        e.preventDefault() // убираем красный кружок, т.е. поведение которое запрещает перемещение выбранного элемента на элемент-посадку(элемент на который он наведен)
        box.classList.add('is-hovered') // добавляем класс отвечающий за стили границы элемента-посадки когда на него наведен выбранный элемент
    })

    box.addEventListener('dragleave', e => {
        box.classList.remove('is-hovered') // когда курсор с выбранным элементом убирается с элемента-посадки - убираем стили границы элемента-посадки
    })

    box.addEventListener('drop', e => {
        box.appendChild(imgEl) // переносим выбранный элемент изображения из box-донора в box-посадку при отпускании ЛКМ
        box.classList.remove('is-hovered')
    })
})