import type * as THREE from 'three';

export interface TypeCanvas {
    htmlRoot: Element;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    positionZ: number;
    init: ()=> void;
    sizeCanvas: (width: number, height: number) => void;
    cameraPositionZ: (z: number) => void;
    cameraPositionX: (x: number) => void;
    cameraPositionY: (y: number) => void;
    createCube: (width: number, height: number, thickness: number) => void;
}