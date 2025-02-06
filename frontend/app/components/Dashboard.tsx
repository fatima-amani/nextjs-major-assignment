"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import ScrollCardSection from "./ScrollCardSection";

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
    price: string;
}

export default function Dashboard() {
    const [dashboardCards, setDashboardCards] = useState<DashboardCardData[]>([]);
    const [scrollCards, setScrollCards] = useState<ScrollCardData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch("http://localhost:3001/data");
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
            <div className="flex justify-around">
                {!loading && dashboardCards.map((data, index) => (
                    <DashboardCard key={index} data={data} />
                ))}
            </div>

            {/* Scroll Card Section */}
            <div>
                <ScrollCardSection scrollCards={scrollCards} />
            </div>

            {/* Bottom Chart Section */}
            <div>
                
            </div>
        </div>
    );
}
