interface DemoProps {
    sectionName: string;
}

export default function Demo({ sectionName }: DemoProps){
    return(
        <div className="text-white text-center p-10">
            Sorry the {sectionName} Page is Under Maintenance.
        </div>
    )
}