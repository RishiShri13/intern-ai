import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

import {
  Users,
  ClipboardCheck,
  Brain,
  CalendarDays,
} from "lucide-react";

import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import GlassCard from "@/components/common/GlassCard";

import DashboardStatCard from "./DashboardStatCard";
import ActivityItem from "./ActivityItem";

const data = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 62 },
  { month: "Apr", value: 80 },
  { month: "May", value: 95 },
  { month: "Jun", value: 120 },
];

export default function DashboardPreview() {
  return (
    <Section id="dashboard" className="py-32">
      <Container>

        <Heading
          center
          badge="Dashboard"
          title="Everything In One Intelligent Workspace"
          subtitle="Powerful analytics, AI insights and internship management in one dashboard."
        />

        <div className="mt-20 space-y-8">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <DashboardStatCard
              icon={Users}
              title="Interns"
              value="10,482"
            />

            <DashboardStatCard
              icon={ClipboardCheck}
              title="Tasks"
              value="1,842"
            />

            <DashboardStatCard
              icon={Brain}
              title="AI Score"
              value="94%"
            />

            <DashboardStatCard
              icon={CalendarDays}
              title="Attendance"
              value="96%"
            />

          </div>

          <GlassCard className="p-8">

            <h3 className="mb-6 text-xl font-bold">
              Productivity Analytics
            </h3>

            <div className="h-80">

              <ResponsiveContainer>

                <AreaChart data={data}>

                  <XAxis dataKey="month" />

                  <Tooltip />

                  <Area
                    dataKey="value"
                    stroke="#22d3ee"
                    fill="#06b6d4"
                    fillOpacity={0.25}
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </GlassCard>

          <div className="grid gap-8 lg:grid-cols-2">

            <GlassCard className="p-8">

              <h3 className="mb-6 text-xl font-bold">
                Recent Activity
              </h3>

              <div className="space-y-4">

                <ActivityItem
                  title="Task submitted"
                  time="2 minutes ago"
                />

                <ActivityItem
                  title="Attendance marked"
                  time="15 minutes ago"
                />

                <ActivityItem
                  title="Certificate generated"
                  time="1 hour ago"
                />

              </div>

            </GlassCard>

            <GlassCard className="p-8">

              <h3 className="mb-6 text-xl font-bold">
                AI Summary
              </h3>

              <p className="leading-8 text-slate-400">

                AI predicts internship completion rate will
                increase by 12% this month. Attendance is
                improving while mentor response time has
                decreased by 18%.

              </p>

            </GlassCard>

          </div>

        </div>

      </Container>
    </Section>
  );
}