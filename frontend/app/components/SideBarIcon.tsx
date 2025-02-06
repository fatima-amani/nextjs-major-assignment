import Image from "next/image";

export default function SideBarIcon({ sectionName }: {sectionName:string}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[7.3125rem] h-[5.25rem]">
        
            <div >
                <Image src="/dashboardicon.png" alt="Dashboard Icon" width={29.72} height={29.72} />
            </div>
            <div className="text-white">
                {sectionName}
            </div>
        
    </div>
  );
}

