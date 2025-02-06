export default function DashboardChart(){
    return(
        <div>
            {/* upper row */}
            <div>
                <div>Overview</div>
                <div>
                    <div>
                        <div></div>
                        <div>Sales</div>
                    </div>
                    <div>
                        <div></div>
                        <div>Revenue</div>
                    </div>
                    
                </div>

                {/* Button group */}
                <div>
                    <div>
                        <button>Montly</button>
                        <button>Daily</button>
                        <button>Weekly</button>
                    </div>

                    <div>
                        <button>
                            <img src="export-logo.png" alt="" />
                            Export
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <img src="" alt="" />
                <div className="flex flex-col justify-between items-center">
                    <div>5k</div>
                    <div>4k</div>
                    <div>3k</div>
                    <div>2k</div>
                    <div>1k</div>
                    <div>0</div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>JAN</div>
                <div>FEB</div>
                <div>MAR</div>
                <div>APR</div>
                <div>MAY</div>
                <div>JUN</div>
                <div>JULY</div>
                <div>AUG</div>
                <div>SEP</div>
                <div>OCT</div>
                <div>NOV</div>
                <div>DEC</div>
            </div>
        </div>
    )
}