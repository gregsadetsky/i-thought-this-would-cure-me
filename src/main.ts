import "./style.css";

import * as THREE from "three";

import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Howl, Howler } from "howler";

// document on load
window.addEventListener("load", () => {
  main();
});

function main() {
  let camera, scene, renderer, clock;
  let nextZPosition = 0;

  var sound = new Howl({
    src: ["/audio/sorry.mp3"],
  });

  init();
  animate();

  function init() {
    clock = new THREE.Clock();
    clock.start();

    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
    );

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 25;
    nextZPosition = camera.position.z;

    // setInterval(() => {
    //   console.log(camera.position);
    // }, 1000);

    // scene

    scene = new THREE.Scene();

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 15);
    // camera.add(pointLight);
    // scene.add(camera);

    // model

    const onProgress = function (xhr) {
      if (xhr.lengthComputable) {
        // const percentComplete = (xhr.loaded / xhr.total) * 100;
        // console.log(Math.round(percentComplete, 2) + "% downloaded");
      }
    };

    new MTLLoader()
      .setPath("/assets/corridor_elevator/")
      .load("corridor_elevator_textured.mtl", function (materials) {
        materials.preload();

        new OBJLoader()
          .setMaterials(materials)
          .setPath("/assets/corridor_elevator/")
          .load(
            "corridor_elevator_textured.obj",
            function (object) {
              // object.position.y = -0.95;
              object.rotateX((0 * Math.PI) / 180);
              // object.scale.setScalar(1);
              scene.add(object);
            },
            onProgress,
          );
      });

    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // new OrbitControls(camera, renderer.domElement);

    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // camera.position.z = 12.5 - Math.sin(clock.getElapsedTime() / 10 + 5) * 12.5;

    // // z - go from 0 to -25, then come back to 0
    // if (camera.position.z > -25) {
    // camera.position.z += 0.1;
    // } else {
    //   camera.position.z = 0;
    // }

    // slowly tween to nextZPosition
    camera.position.z += (nextZPosition - camera.position.z) * 0.05;
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyS") {
      sound.play();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "KeyS") {
      nextZPosition -= 0.1;
    }
  });
}
