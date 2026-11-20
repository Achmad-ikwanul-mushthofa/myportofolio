import { Canvas,useFrame } from '@react-three/fiber'
import { Float,OrbitControls,Stars } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'
function Core(){const ref=useRef<Mesh>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.x+=d*.08;ref.current.rotation.y+=d*.14}});return <Float speed={1.2} rotationIntensity={.35} floatIntensity={.7}><mesh ref={ref}><icosahedronGeometry args={[1.55,2]}/><meshStandardMaterial color="#2563eb" emissive="#0b3b91" emissiveIntensity={1.5} roughness={.25} metalness={.65}/></mesh></Float>}
function Wire(){return <mesh rotation={[.2,.3,.1]}><icosahedronGeometry args={[2.05,2]}/><meshBasicMaterial color="#3b82f6" wireframe transparent opacity={.62}/></mesh>}
export function ThreeScene(){return <div className="h-[420px] w-full lg:h-[620px]"><Canvas camera={{position:[0,0,5.5],fov:42}}><ambientLight intensity={.6}/><pointLight position={[3,3,4]} intensity={10} color="#60a5fa"/><pointLight position={[-4,-2,2]} intensity={5} color="#2563eb"/><Stars radius={70} depth={35} count={900} factor={1.4} fade speed={.25}/><Core/><Wire/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.6}/></Canvas></div>}
