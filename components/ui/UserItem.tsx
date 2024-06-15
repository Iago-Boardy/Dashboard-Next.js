'use client';
import Image from "next/image";
import User from "../../app/assets/manelgomi.jpeg"

export default function UserItem() {
  return <div className="flex itens-center justify-between gap-2 border rounded-[8px] p-2">
    <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
      {/* <Image src={User} alt="O rei, Manoel Gomes"></Image>  //EXEMPLO DE COMO USAR IMAGEM*/}
      <p>IP</p>
    </div>
    
    <div className="grow">
      <p className="text-[16px] font-bold">Iago Padilha</p>
      <p className="text-[12px] text-neutral-500">iagogol2006@gmail.com</p>
    </div>
    
  </div>
} 
