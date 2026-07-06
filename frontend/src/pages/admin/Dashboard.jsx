import React, { useEffect, useState } from "react";
import { FolderCheck, MessagesSquare, NotebookPen, NotepadTextDashed } from "lucide-react";
import { dashboard_data } from "../../Assets/assets";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentsBlogs: [],
  });

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data);
  };
  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <FolderCheck className="text-cyan-600 bg-cyan-600/10 p-4 w-14 h-14 " />
          <div>
            <p className="text-gray-600 text-xl font-semibold">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-600 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <MessagesSquare className="text-cyan-600 bg-cyan-600/10 p-4 w-14 h-14 " />
          <div>
            <p className="text-gray-600 text-xl font-semibold">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-600 font-light">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all">
          <NotebookPen className="text-cyan-600 bg-cyan-600/10 p-4 w-14 h-14 " />
          <div>
            <p className="text-gray-600 text-xl font-semibold">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-600 font-light">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <NotepadTextDashed />
          <p>Latest Blogs</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
