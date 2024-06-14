import {TypeVDom, TypeVNode, Props} from "./TypeVDom";

export class VirtualDom implements TypeVDom {


    create_V_Node (tagName: string, atr: Props = {}, children: Array<TypeVNode> = []) {
        return {
            tagName: tagName,
            props: atr,
            children: children
        }
    }
    create_DOM_Node (vNode: TypeVNode) {

        if (typeof (vNode) === "string") return document.createTextNode(vNode)

        const {tagName, props, children} = vNode

        const node: HTMLElement = document.createElement(tagName)

        Object.keys(props).forEach((el) => {
            node.setAttribute(el, props[el])
        })

        children.forEach( el => {
            node.appendChild(this.create_DOM_Node(el))
        })

        return node
    }
}