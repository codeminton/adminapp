export default function Sidebar() {
    return <div class="bg-gray-800 flex flex-col h-screen menu">
        <a href="#" class="block px-7 py-7 text-2xl text-white/80 hover:text-white">Adminapp</a>
        <nav class="flex flex-col pr-9 flex-1 overflow-auto">
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-pie shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a0.9 .9 0 0 0 -1 -.8">
                    </path>
                    <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5"></path>
                </svg>
                Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left ml-auto"
                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
            </a>
            <nav class="hidden flex-col relative py-2">
                <a href="#" class="sub-nav-link hover:text-white">E-commerce</a>
                <a href="#" class="sub-nav-link hover:text-white">Sales</a>
            </nav>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4h6v8h-6z"></path>
                    <path d="M4 16h6v4h-6z"></path>
                    <path d="M14 12h6v8h-6z"></path>
                    <path d="M14 4h6v4h-6z"></path>
                </svg>
                Pages
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left ml-auto"
                    width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
            </a>
            <nav class="hidden flex-col relative py-2">
                <a href="#" class="sub-nav-link hover:text-white">Users</a>
                <a href="#" class="sub-nav-link hover:text-white">Profile</a>
                <a href="#" class="sub-nav-link hover:text-white">Orders</a>
                <a href="#" class="sub-nav-link hover:text-white">Activities</a>
            </nav>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2 shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3">
                    </path>
                    <line x1="8" y1="9" x2="16" y2="9"></line>
                    <line x1="8" y1="13" x2="14" y2="13"></line>
                </svg>
                Chat
                <span
                    class="flex justify-center items-center rounded-full ml-auto w-6 h-6 bg-green-600 text-white text-xs">3</span>
            </a>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-minus shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                    <line x1="16" y1="3" x2="16" y2="7"></line>
                    <line x1="8" y1="3" x2="8" y2="7"></line>
                    <line x1="4" y1="11" x2="20" y2="11"></line>
                    <line x1="10" y1="16" x2="14" y2="16"></line>
                </svg>
                Calendar
            </a>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail shrink-0" width="28"
                    height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                Email
            </a>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-check shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                    <line x1="11" y1="6" x2="20" y2="6"></line>
                    <line x1="11" y1="12" x2="20" y2="12"></line>
                    <line x1="11" y1="18" x2="20" y2="18"></line>
                </svg>
                Tasks
                <span
                    class="flex justify-center items-center rounded-full ml-auto w-6 h-6 bg-orange-500 text-white text-xs">3</span>
            </a>
            <a href="#" class="nav-link font-extralight hover:text-white hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud shrink-0" width="28"
                    height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 .996c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878">
                    </path>
                </svg>
                File Manager
            </a>
        </nav>
        <nav class="flex border-t border-white/10">
            <a href="#"
                class="flex flex-1 justify-center gap-4 text-white/70 hover:text-white hover:bg-white/5 py-4 font-extralight text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings shrink-0"
                    width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                    </path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Settings
            </a>
            <a href="#"
                class="flex flex-1 justify-center gap-4 text-white/70 hover:text-white hover:bg-white/5 py-4 font-extralight text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout shrink-0" width="28"
                    height="28" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                </svg>
                Logout
            </a>
        </nav>
    </div>
}