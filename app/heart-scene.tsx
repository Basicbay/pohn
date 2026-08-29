"use client";

import { useEffect, useRef } from "react";

export default function HeartScene({ chapter, paused }: { chapter: number; paused: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const chapterRef = useRef(chapter);
  const pausedRef = useRef(paused);
  useEffect(() => { chapterRef.current = chapter; }, [chapter]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let frame = 0, disposed = false;
    let cleanup = () => {};
    Promise.all([
      import("three"),
      import("three/examples/jsm/postprocessing/EffectComposer.js"),
      import("three/examples/jsm/postprocessing/RenderPass.js"),
      import("three/examples/jsm/postprocessing/UnrealBloomPass.js"),
    ]).then(([THREE, { EffectComposer }, { RenderPass }, { UnrealBloomPass }]) => {
      if (disposed) return;
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x08050b, 0.038);
      const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, 0.1, 70);
      camera.position.set(0, 0, 9);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 700 ? 1.5 : 2));
      renderer.setSize(innerWidth, innerHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      mount.appendChild(renderer.domElement);
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 1.2, 0.75, 0.12);
      composer.addPass(bloom);
      const world = new THREE.Group(); scene.add(world);

      const shape = new THREE.Shape();
      shape.moveTo(0, -0.8); shape.bezierCurveTo(-2.2, -2.2, -3.4, 1.2, -1.2, 1.7);
      shape.bezierCurveTo(0, 2.05, 0, 1.05, 0, 0.7); shape.bezierCurveTo(0, 1.05, 0, 2.05, 1.2, 1.7);
      shape.bezierCurveTo(3.4, 1.2, 2.2, -2.2, 0, -0.8);
      const heartGeometry = new THREE.ExtrudeGeometry(shape, { depth: .24, bevelEnabled: true, bevelSize: .12, bevelThickness: .1, bevelSegments: 4 });
      heartGeometry.center();
      const miniHearts = new THREE.InstancedMesh(heartGeometry, new THREE.MeshStandardMaterial({ color: 0xff7ba5, emissive: 0x4a001e, emissiveIntensity: .7, roughness: .3, transparent: true, opacity: .78 }), 34);
      const dummy = new THREE.Object3D();
      const heartSeeds = Array.from({ length: 34 }, (_, i) => ({ radius: 3.2 + i % 7 * .34, phase: i * 2.399, speed: .06 + i % 5 * .012, y: (i * 1.71 % 7) - 3.5, scale: .035 + i % 4 * .012 }));
      world.add(miniHearts);

      const count = innerWidth < 700 ? 420 : 850;
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3), colors = new Float32Array(count * 3);
      const pink = new THREE.Color(0xff3f7d), gold = new THREE.Color(0xffc071);
      for (let i = 0; i < count; i++) {
        const radius = 2 + Math.random() * 14, angle = Math.random() * Math.PI * 2;
        positions.set([Math.cos(angle) * radius, (Math.random() - .5) * 12, Math.sin(angle) * radius - 4], i * 3);
        const color = pink.clone().lerp(gold, Math.random()); colors.set([color.r, color.g, color.b], i * 3);
      }
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ size: .045, vertexColors: true, transparent: true, opacity: .82, blending: THREE.AdditiveBlending, depthWrite: false })); world.add(particles);

      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-7,-2.7,-4),new THREE.Vector3(-3,2.5,-2),new THREE.Vector3(0,-1.3,0),new THREE.Vector3(3,2.1,-1),new THREE.Vector3(7,-1.8,-4)]);
      const ribbon = new THREE.Mesh(new THREE.TubeGeometry(curve,120,.018,6,false),new THREE.MeshBasicMaterial({ color:0xff9eb4,transparent:true,opacity:.36,blending:THREE.AdditiveBlending })); world.add(ribbon);
      const rings = new THREE.Group();
      for (let i=0;i<7;i++) { const ring=new THREE.Mesh(new THREE.TorusGeometry(1.7+i*.62,.008,5,90),new THREE.MeshBasicMaterial({color:i%2?0xff99b2:0xffd19d,transparent:true,opacity:.2})); ring.rotation.set(i*.19,i*.34,i*.11); rings.add(ring); } world.add(rings);
      const shootingGeometry = new THREE.BufferGeometry();
      const shootingPositions = new Float32Array(8 * 6);
      shootingGeometry.setAttribute("position", new THREE.BufferAttribute(shootingPositions, 3));
      const shootingStars = new THREE.LineSegments(shootingGeometry, new THREE.LineBasicMaterial({ color: 0xffd9e4, transparent: true, opacity: .9, blending: THREE.AdditiveBlending }));
      world.add(shootingStars);

      const petals = new THREE.InstancedMesh(new THREE.CircleGeometry(.08,5),new THREE.MeshBasicMaterial({color:0xffc3cd,side:THREE.DoubleSide,transparent:true,opacity:.62}),80);
      const petalSeeds=Array.from({length:80},(_,i)=>({x:(i*3.17%16)-8,y:(i*1.93%11)-5,z:(i*2.71%10)-7,speed:.12+i%9*.018})); world.add(petals);
      scene.add(new THREE.AmbientLight(0xffd8e4,1.4));
      const keyLight=new THREE.PointLight(0xff286f,58,30),warmLight=new THREE.PointLight(0xffa45f,38,25); keyLight.position.set(4,2,6);warmLight.position.set(-5,-2,4);scene.add(keyLight,warmLight);

      const pointer=new THREE.Vector2();
      const onPointer=(event:PointerEvent)=>pointer.set((event.clientX/innerWidth-.5)*2,-(event.clientY/innerHeight-.5)*2);
      addEventListener("pointermove",onPointer,{passive:true});
      const clock=new THREE.Clock(); let elapsed=0;
      const render=()=>{
        const delta=Math.min(clock.getDelta(),.05); if(!pausedRef.current)elapsed+=delta;
        const t=elapsed,current=chapterRef.current,finale=current===6;
        const targetX=[2.7,-2.9,0,2.4,-2.2,3.1,0][current] ?? 0;
        const targetY=[0,.5,-.35,.18,-.42,.28,0][current] ?? 0;
        camera.position.x+=(targetX+pointer.x*.35-camera.position.x)*.025;
        camera.position.y+=(targetY+pointer.y*.22-camera.position.y)*.025;
        camera.position.z+=((current===2||current===5?6.5:finale?7.3:8.8)-camera.position.z)*.025; camera.lookAt(0,0,0);
        world.rotation.z += ((current===1?.045:current===4?-.035:0)-world.rotation.z)*.018;
        heartSeeds.forEach((seed,i)=>{const angle=seed.phase+t*seed.speed*(current===2?5:1),expansion=finale?1.45:1;dummy.position.set(Math.cos(angle)*seed.radius*expansion,seed.y+Math.sin(t+i)*.22,Math.sin(angle)*seed.radius-2);dummy.rotation.set(t*.2+i,-angle,Math.sin(t+i));dummy.scale.setScalar(seed.scale*(finale?1.7:1));dummy.updateMatrix();miniHearts.setMatrixAt(i,dummy.matrix)});miniHearts.instanceMatrix.needsUpdate=true;
        petalSeeds.forEach((seed,i)=>{const fall=(seed.y-t*seed.speed*(current===3?5:1)+6)%12-6;dummy.position.set(seed.x+Math.sin(t*.5+i)*.7,fall,seed.z);dummy.rotation.set(t*seed.speed+i,t*.35+i,Math.sin(t+i));dummy.scale.setScalar(current===3?1.35:.7);dummy.updateMatrix();petals.setMatrixAt(i,dummy.matrix)});petals.instanceMatrix.needsUpdate=true;
        petals.visible=current===3||current===5||current===6;rings.visible=current===1||current===4;ribbon.visible=current===0||current===2;rings.rotation.z=t*.045;rings.rotation.y=t*.08;ribbon.rotation.y=Math.sin(t*.18)*.25;particles.rotation.y=t*((current===2||current===5)?.11:.025);particles.position.z=current===2||current===5?t*.5%3:0;keyLight.intensity=34+Math.max(0,Math.sin(t*2.3))*(finale?35:8);
        shootingStars.visible=finale;
        if(finale){const p=shootingGeometry.attributes.position.array as Float32Array;for(let i=0;i<8;i++){const phase=(t*.32+i*.73)%1.4;const x=((i*2.7)%14)-7+phase*8;const y=5-phase*7;const z=-2+(i%3)*.8;p.set([x,y,z,x-.75,y+.75,z],i*6)}shootingGeometry.attributes.position.needsUpdate=true;}
        bloom.strength += ((finale ? 1.85 : current === 5 ? 1.5 : 1.1) - bloom.strength) * .03;
        composer.render();frame=requestAnimationFrame(render);
      };render();
      const resize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.5:2));renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight)};
      addEventListener("resize",resize);
      cleanup=()=>{cancelAnimationFrame(frame);removeEventListener("resize",resize);removeEventListener("pointermove",onPointer);world.traverse(object=>{if(object instanceof THREE.Mesh||object instanceof THREE.Line||object instanceof THREE.Points){object.geometry.dispose();const material=object.material;if(Array.isArray(material))material.forEach(item=>item.dispose());else material.dispose()}});composer.dispose();renderer.dispose();renderer.domElement.remove()};
    });
    return()=>{disposed=true;cleanup()};
  },[]);
  return <div ref={mountRef} className="heart-scene" aria-hidden="true" />;
}
