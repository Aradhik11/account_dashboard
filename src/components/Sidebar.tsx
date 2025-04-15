import Link from "next/link";
import home from "../../public/account-dashboard/Text/Home.svg";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white flex flex-col">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-green-600">Lifetime</h1>
        </div>

        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex gap-3 items-center px-4 py-3 text-sm font-medium text-white bg-[#19A752] rounded-lg"
          >
            <Image src={home} alt="home" width={20} height={20} />
            <p>Dashboard</p>
          </Link>

          <Link
            href="/profile"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Profile
          </Link>

          <Link
            href="/settings"
            className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Settings
          </Link>
        </nav>
      </div>

      <div className="mt-auto p-6 border">
        <div className="space-y-1 flex flex-col gap-5">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Help & Support
          </h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <Link
                href="/faqs"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex gap-2">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p>FAQs</p>
                </div>
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex gap-2">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p>Contact Us</p>
                </div>
              </Link>
            </div>
            <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
