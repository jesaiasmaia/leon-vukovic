import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout';
import HomePage from './pages/Home';
import WorkspacePage from './pages/dashboard/Workspace';
import EnhancePage from './pages/dashboard/Enhance';
import TestPage from './pages/dashboard/Test';
import NewProjectPage from './pages/dashboard/NewProject';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard/workspace" replace />} />
        <Route path="workspace" element={<WorkspacePage />} />
        <Route path="workspace/new" element={<NewProjectPage />} />
        <Route path="enhance" element={<EnhancePage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
    </Routes>
  );
}