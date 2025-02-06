"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";

interface DashboardCardData {
    title: string;
    figure: string;
    date?: string; 
    icon: string;
    chart: string;
}

export default function Dashboard() {
    const [dashboardCards, setDashboardCards] = useState<DashboardCardData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await fetch("http://localhost:3001/dashboardCard");
                const dashboardCard: {dashboardCard: DashboardCardData[] } = await response.json();
                setDashboardCards(dashboardCard);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="ml-5 flex justify-around">
            {dashboardCards && dashboardCards.map((data, index) => (
                <DashboardCard key={index} data={data} />
            ))}
        </div>
    );
}
