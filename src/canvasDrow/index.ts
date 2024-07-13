import {TypeCanvas} from "./typeCanvas";
import * as THREE from 'three';
import {MeshBasicMaterialParameters} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
export class CanvasDrow implements TypeCanvas {
    htmlRoot = {} as HTMLElement;
    scene = {} as THREE.Scene;
    renderer = {} as THREE.WebGLRenderer;
    camera = {} as THREE.PerspectiveCamera;
    positionZ = 10;
    controls = {} as OrbitControls;
    constructor(Root: HTMLElement) {
        this.htmlRoot = Root
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.camera.position.set( 5, 5, 5 );
        this.renderer.setSize( this.htmlRoot.offsetWidth, this.htmlRoot.offsetHeight );
        this.htmlRoot.appendChild(this.renderer.domElement);
        this.renderer.render( this.scene, this.camera );
        this.controls.update()
    }
    sizeCanvas (width: number, height: number) {
        this.renderer.setSize(width, height);
    }
    cameraPositionZ (z: number) {
        this.positionZ += z;
        this.camera.position.z = this.positionZ;
    }
    cameraPositionY (y: number) {
        this.camera.position.y = y;
    }
    cameraPositionX (x: number) {
        this.camera.position.x = x;
    }
    createCube (width: number, height: number, thickness: number, parameters: MeshBasicMaterialParameters = {color: 0x000000}) {
        const geometry = new THREE.BoxGeometry(width, height, thickness);
        const material = new THREE.MeshBasicMaterial(parameters);
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.renderer.setAnimationLoop(()=>{
            cube.rotation.y += 0.1
            this.renderer.render( this.scene, this.camera );
            this.controls.update()
        });
    }
    animate () {
        this.renderer.setAnimationLoop(()=>{

        });
    }
}