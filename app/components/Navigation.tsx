export default function Navigation() {
  return (
    <nav className='fixed bottom-6 left-1/2 -translate-x-1/2 z-50 nav-glass text-white px-6 py-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center gap-6'>
      <a href='#' className='font-bold flex items-center gap-2 text-dark-primary'>
        <div className='w-2 h-2 rounded-full bg-dark-primary shadow-[0_0_10px_#6366f1]'></div>
        <span className='hidden sm:inline'>Home</span>
      </a>
      <div className='h-4 w-px bg-white/80'></div>
      <a href='#events' className='text-sm font-medium text-dark-muted hover:text-white transition-colors'>
        Events
      </a>
      <a href='#team' className='text-sm font-medium text-dark-muted hover:text-white transition-colors'>
        Team
      </a>
      <a
        href='https://bento.me/d3community'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-dark-primary text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-indigo-400 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]'
      >
        Join
      </a>
    </nav>
  );
}
