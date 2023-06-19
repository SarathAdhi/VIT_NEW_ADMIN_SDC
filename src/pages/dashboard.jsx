import withAuth from "@hoc/withAuth";
import { PageCard } from "@layouts/PageCard";
import { PageLayout } from "@layouts/PageLayout";
import React from "react";

const Dashboard = () => {
  return (
    <PageLayout title="Admin Dashborad">
      <PageCard title="Dashboard"></PageCard>
    </PageLayout>
  );
};

export default withAuth(Dashboard);
