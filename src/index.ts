import './scss/index.scss'
import {VirtualDom} from "./VDOM/VirtualDom";
import {CanvasDrow} from "./canvasDrow";

const root = document.querySelector('#root')

// const VDom = new VirtualDom()
//
// root.replaceWith(VDom.create_DOM_Node(VDom.create_V_Node('div', {class: 'container', id: 'app'}, [])))

const canvas3d = new CanvasDrow(root as HTMLElement)
canvas3d.init()
canvas3d.createCube(2, 2, 2)
canvas3d.createCube(1, 3, 5, {color: 0xffffff})





// root.addEventListener('mousemove', (event) => {
//     // @ts-ignore
//     console.log(event.offsetX)
//     // @ts-ignore
//     canvas3d.cameraPositionX(parseInt(event.offsetX)/10)
//     // @ts-ignore
//     canvas3d.cameraPositionY(parseInt(event.offsetY)/10)
// })
// root.addEventListener('wheel', (event) => {
//     // @ts-ignore
//     // console.log(event.deltaY)
//     canvas3d.cameraPositionZ(parseInt(event.deltaY)/100)
// })
