export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <header>
        <h1>Sentinel Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}