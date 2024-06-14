import './scss/index.scss'
import {VirtualDom} from "./VDOM/VirtualDom";

const root = document.querySelector('#root')

const VDom = new VirtualDom()

root.replaceWith(VDom.create_DOM_Node(VDom.create_V_Node('div', {class: 'container', id: 'app'}, [])))
