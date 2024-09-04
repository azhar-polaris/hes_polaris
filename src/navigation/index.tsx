import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import FullScreen from "@/components/customUI/Loaders/FullScreen";
import MainOutlet from "./MainOutlet";

const Dashboard = lazy(() => import("@/pages/hes/dashboard"));
const BlockLoad = lazy(() => import("@/pages/hes/live-data/block-load"));
const DailyLoad = lazy(() => import("@/pages/hes/live-data/daily-load"));
const MonthlyBilling = lazy(() => import("@/pages/hes/live-data/monthly-billing"));
const InstantaneousProfile = lazy(() => import("@/pages/hes/live-data/instantaneous-profile"));
const ScheduledReads = lazy(() => import("@/pages/hes/scheduled-reads"));
const CommandExecution = lazy(() => import("@/pages/hes/command-execution"));

const NotFound = lazy(() => import("@/pages/not-found"));

function Navigation() {
  return (
    <Router basename="/hes/">
      <Suspense fallback={<FullScreen hasSpinner={true} />}>
        <Routes>

          <Route path="/" element={<MainOutlet />}>

            <Route index element={<Dashboard />} />

            <Route path="live-data" element={<Outlet />}>
              <Route path="block-load" element={<BlockLoad />} />
              <Route path="daily-load" element={<DailyLoad />} />
              <Route path="monthly-billing" element={<MonthlyBilling />} />
              <Route path="instantaneous-profile" element={<InstantaneousProfile />} />
            </Route>

            <Route path="scheduled-reads" element={<ScheduledReads />} />
            <Route path="command-execution" element={<CommandExecution />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default Navigation;
