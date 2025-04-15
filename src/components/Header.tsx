import bell from "../../public/Frame.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10">
      <div className="px-6 h-[72px] flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-[22px] font-semibold">
            <span className="text-[#00A651]">Life</span>
            <span className="text-black">time</span>
          </a>
        </div>

        <div className="flex  items-center gap-4">
          <div className="relative">
            <span className="absolute -top-0.5 -right-0.5 h-[10px] w-[10px] bg-red-500 rounded-full border-2 border-white"></span>
            <button className="p-2 text-gray-600 hover:text-gray-900 bg-[#DDE6F0] rounded-full">
              {/* <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg> */}
              <Image src={bell} alt="Notification" width={20} height={20} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-700">
              NA
            </div>
            <span className="text-sm font-medium text-gray-700">
              Nike Adesanoye
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
