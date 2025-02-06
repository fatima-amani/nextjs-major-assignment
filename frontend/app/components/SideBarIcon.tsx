import Image from "next/image";

export default function SideBarIcon({ sectionName, isActive }: { sectionName: string; isActive: boolean }) {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 w-[7.3125rem] h-[5.25rem] ${isActive ? "bg-[#fac1d9] text-black" : "text-white"}`}>
      <div>
        <Image src="/dashboardicon.png" alt={`${sectionName} Icon`} width={29.72} height={29.72} />
      </div>
      <div>
        {sectionName}
      </div>
    </div>
  );
}
