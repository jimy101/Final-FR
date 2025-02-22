/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 bed_cream-colored_low_poly.glb 
Author: Moryak (https://sketchfab.com/_moryak_)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bed-cream-colored-low-poly-ae5ae1da7dd444abae8ea14d9635a8dc
Title: Bed cream-colored Low poly
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Bed2(props) {
  const dispatch = useDispatch();
  const { nodes, materials } = useGLTF(
    "/models/bed2/bed_cream-colored_low_poly.glb"
  );
  const array = useSelector((state) => state.modelReducer.objectsArr);
  let object = array.filter((obj) => {
    return obj.name == "Bed2";
  });
  function clickHandler() {
    dispatch(highlight("Bed2"));
  }
  console.log(object[0].isAdded, object);
  function insertion() {
    console.log("objects", array);
    dispatch(
      insert({
        name: "Bed2",
        position: position,
        rotate: rotate,
        isAdded: true,
        factor: 10,
      })
    );
  }

  return (
    <>
      {object[0].isAdded && (
        <group
          {...props}
          dispose={null}
          onClick={clickHandler}
          onDoubleClick={insertion}
        >
          <group scale={0.02}>
            <mesh
              geometry={nodes.aeneoclsbdg000005_aeneoclsbdg000005_0.geometry}
              material={materials.aeneoclsbdg000005}
              position={object[0].position}
              rotation={[-Math.PI / 2, 0, object[0].rotate]}
              scale={[96.122, 99.135, 29.838]}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/bed2/bed_cream-colored_low_poly.glb");
