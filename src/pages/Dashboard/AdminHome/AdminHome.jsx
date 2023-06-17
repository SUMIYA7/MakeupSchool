import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Fade, Slide } from "react-awesome-reveal";




const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });

    return (
      <div className="w-full m-4">
        <Slide>
          <h2 className="text-3xl text-black pt-4">
            WelCome to Makeup School {user.displayName}!
          </h2>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          Good skin Good Life...
        </Fade>
        <div className="stats shadow bg-gray-600 mt-5">
          <div className="stat">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Revenue</div>
            <div className="stat-value text-white">${stats.revenue}</div>
            <div className="stat-desc text-white">June 1st - July 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">New Users</div>
            <div className="stat-value text-white">{stats.users}</div>
            <div className="stat-desc text-white">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Total Classes</div>
            <div className="stat-value text-white">{stats.products}</div>
            <div className="stat-desc text-white">↗︎ 200 (22%)</div>
          </div>

          <div className="stat text-white">
            <div className="stat-figure text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 text-white stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-white">Class Booked</div>
            <div className="stat-value text-white">{stats.orders}</div>
            <div className="stat-desc text-white">↘︎ 90 (20%)</div>
          </div>
        </div>
      </div>
    );
};

export default AdminHome;