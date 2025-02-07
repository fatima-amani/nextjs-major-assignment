"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import ScrollCardSection from "./ScrollCardSection";
import DashboardChart from "./DashboardChart";

interface DashboardCardData {
    title: string;
    figure: string;
    date?: string; 
    icon: string;
    chart: string;
}

interface ScrollCardData {
    img: string;
    title: string;
    detail: string;
    stock: boolean;
    price: number;
    qty:number
}

export default function Dashboard() {
    const [dashboardCards, setDashboardCards] = useState<DashboardCardData[]>([]);
    const [scrollCards, setScrollCards] = useState<ScrollCardData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch("http://localhost:8080/dashboard");
                const data = await response.json();

                if (data && data.dashboardCard && data.scrollCard) {
                    setDashboardCards(data.dashboardCard);
                    setScrollCards(data.scrollCard);
                }
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="ml-5">
            {/* Dashboard Cards Section */}
            <div className="flex justify-around overflow-x-auto">
                {!loading && dashboardCards.map((data, index) => (
                    <DashboardCard key={index} data={data} />
                ))}
            </div>

            {/* Scroll Card Section */}
            <div>
                <ScrollCardSection scrollCards={scrollCards || []} />
            </div>

            {/* Bottom Chart Section */}
            <div className="">
                <DashboardChart/>
            </div>
        </div>
    );
}
