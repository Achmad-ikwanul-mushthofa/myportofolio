import type { ReactNode } from 'react'
import { FaGitAlt, FaReact } from 'react-icons/fa'
import { SiExpress,SiMysql,SiNodedotjs,SiPostgresql,SiPrisma,SiTailwindcss,SiTypescript } from 'react-icons/si'
const icons:Record<string,ReactNode>={React:<FaReact/>, 'React JS':<FaReact/>, 'React Native':<FaReact/>, TypeScript:<SiTypescript/>, 'Node.js':<SiNodedotjs/>, 'Express.js':<SiExpress/>, PostgreSQL:<SiPostgresql/>, MySQL:<SiMysql/>, Prisma:<SiPrisma/>, 'Tailwind CSS':<SiTailwindcss/>, 'Git & GitHub':<FaGitAlt/>}
export function TechIcon({name}:{name:string}){return <span className="text-xl text-blue-300">{icons[name] ?? <FaReact/>}</span>}
