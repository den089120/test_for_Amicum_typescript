export type Props = Record<string, string>

export interface TypeVNode {
    tagName: string;
    props: Props;
    children: Array<TypeVNode>;
}

export interface TypeVDom {
    create_V_Node: (tagName: string, atr: Props, children: Array<TypeVNode>) => TypeVNode;
    create_DOM_Node: (vNode: TypeVNode) =>  Text | HTMLElement;
}