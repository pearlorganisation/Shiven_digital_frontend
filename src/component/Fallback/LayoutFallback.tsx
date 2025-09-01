// src/components/Skeleton/SkeletonLayout.tsx


const SkeletonLayout = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* --- Skeleton Header --- */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-50">
        {/* Left: Toggle & Logo */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-slate-200 animate-pulse"></div>
          <div className="w-24 h-6 rounded bg-slate-200 animate-pulse hidden sm:block"></div>
        </div>

        {/* Center: Search */}
        <div className="w-1/3 h-9 rounded-lg bg-slate-200 animate-pulse hidden md:block"></div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
            <div className="hidden lg:block">
              <div className="w-20 h-4 rounded bg-slate-200 animate-pulse"></div>
              <div className="w-16 h-3 rounded bg-slate-200 animate-pulse mt-1.5"></div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Skeleton Sidebar --- */}
      <aside className="fixed top-16 left-0 h-full w-64 bg-white border-r border-slate-200 pt-6 px-4 z-40">
        <ul>
          {/* Repeat for a few sidebar items */}
          {[...Array(3)].map((_, i) => (
            <li key={i} className="flex items-center gap-3 p-3 mb-2">
              <div className="w-6 h-6 rounded bg-slate-200 animate-pulse"></div>
              <div className="w-32 h-5 rounded bg-slate-200 animate-pulse"></div>
            </li>
          ))}
          {/* An "active" looking item */}
          <li className="flex items-center gap-3 p-3 mb-2 bg-slate-100 rounded-lg">
            <div className="w-6 h-6 rounded bg-slate-300 animate-pulse"></div>
            <div className="w-32 h-5 rounded bg-slate-300 animate-pulse"></div>
          </li>
        </ul>
      </aside>

      {/* --- Skeleton Main Content --- */}
      <main className="pt-16 ml-64 p-8">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
          {/* Mimicking the "Not Found" page structure */}
          <div className="w-24 h-24 rounded-2xl bg-slate-200 animate-pulse mb-6"></div>
          <div className="w-1/2 h-10 rounded bg-slate-200 animate-pulse mb-4"></div>
          <div className="w-2/3 h-4 rounded bg-slate-200 animate-pulse mb-2"></div>
          <div className="w-1/2 h-4 rounded bg-slate-200 animate-pulse"></div>
          <div className="flex gap-4 mt-8">
            <div className="w-36 h-12 rounded-xl bg-slate-200 animate-pulse"></div>
            <div className="w-36 h-12 rounded-xl bg-slate-200 animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkeletonLayout;