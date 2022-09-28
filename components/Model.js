import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three';

function Model() {

    const gltf = useLoader(GLTFLoader, "/model/scene.gltf")

    useEffect(() => {
        gltf.scene.scale.set(0.5, 0.5, 0.5)
        gltf.scene.position.set(0, -1.3, 0)
        gltf.scene.rotation.set(0, 0, 0);
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    }, [gltf])

    return <primitive object={gltf.scene}/>
}

export default Model