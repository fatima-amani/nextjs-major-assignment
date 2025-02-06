interface SidebarProps {
    setActiveSection: (section: string) => void;
    activeSection: string;
}

export default function Header({ setActiveSection, activeSection }: SidebarProps) {

    let handleUserIconClick = () => {
        setActiveSection("Profile")
    }

    let handleNotificationClick = () => {
        setActiveSection("Notification")
    }


    return(
        <div className="w-[95%] h-[5%] flex justify-between items-center mt-10 ml-5">
            <div className="flex justify-between items-center w-[12.0725rem] h-[2.375rem] gap-4">
                {/* go Back icon and dashboard  */}
                <div>
                    <img src="header-back-icon.png" alt="" className="w-[2.23rem] h-[2.23rem]"/>                
                </div>
                <div className="text-white w-[9.15rem] h-[2.38rem] font-poppins text-[1.5625rem] font-medium leading-[2.34375rem] text-left underline decoration-transparent">
                    {activeSection}
                </div>
            </div>

            {/* notification and user icons */}
            <div className="flex justify-between items-center w-[6.13rem] h-[2.32rem]">
                <div onClick={handleNotificationClick}>
                    <img src="notification.png" alt="" className="w-[1.02rem] h-[1.25rem]"/>
                </div>
                <div className="h-[1.393rem] border-[0.04625rem] border-white"></div>
                <div onClick={handleUserIconClick}>
                    <img src="user-icon.png" alt="" className="w-[2.32rem] h-[2.32rem]"/>
                </div>
            </div>
        </div>
    )
}