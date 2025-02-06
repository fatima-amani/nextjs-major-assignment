interface DemoProps {
    sectionName: string;
}

export default function Demo({ sectionName }: DemoProps){
    return(
        <h1 className="text-white">Sorry {sectionName} Page in under Maintenance</h1>
    )
}