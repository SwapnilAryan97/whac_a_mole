n_blocks = 9
const grid = document.querySelector('#grid')


function create_grid(n_blocks) {
    for (let i = 0; i < n_blocks; i++) {
        const block = document.createElement('div')
        block.setAttribute('class', "square")
        block.setAttribute('id', i)
        block.addEventListener('click', func)
        grid.append(block)
    }
}