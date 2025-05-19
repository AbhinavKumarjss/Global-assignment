
export default function Dashboard() {
    return (
        <div className='h-full bg-[var(--color-lightgray)] dark:bg-[var(--color-dark)] rounded-2xl p-5 mr-4'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-7 h-full'>
                {/* Welcome Card */}
                <div className='w-full'>
                    <div data-testid="flowbite-card" className="flex rounded-xl relative w-full break-words flex-col card p-[30px] bg-primary dark:bg-primary pb-0 shadow-md dark:shadow-none">
                        <div className="flex h-full flex-col justify-center gap-2 p-0">
                            <div className="grid grid-cols-12">
                                <div className="md:col-span-7 col-span-12">
                                    <div className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-tw bg-white flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar text-dark opacity-70" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentColor" fill-rule="evenodd" d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V8.803L15.114 14.9c-.469.466-.873.868-1.24 1.147c-.394.298-.83.524-1.369.524c-.538 0-.975-.226-1.369-.525c-.367-.278-.77-.68-1.24-1.146l-.274-.273c-.514-.511-.847-.84-1.125-1.051c-.26-.198-.382-.22-.463-.22c-.08 0-.202.023-.462.22c-.277.211-.61.54-1.124 1.052L2.529 18.53a.75.75 0 0 1-1.058-1.062l3.953-3.938c.47-.466.873-.869 1.24-1.148c.394-.3.831-.525 1.37-.526c.539 0 .976.226 1.37.525c.367.279.771.681 1.24 1.148l.275.272c.514.511.847.84 1.124 1.05c.26.198.382.22.462.22s.202-.022.462-.22c.278-.21.61-.539 1.125-1.05l6.09-6.052h-3.764a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <h5 className="text-xl text-white">Welcome Back David</h5>
                                    </div>
                                    <div className="flex w-full xl:mt-12 sm:mt-12 lg:mt-6 mt-6">
                                        <div className="border-e border-white/20 pe-4">
                                            <p className="text-white opacity-75 text-sm mb-1">Budget</p>
                                            <h2 className="text-white text-2xl">$98,450</h2>
                                        </div>
                                        <div className="ps-4">
                                            <p className="text-white opacity-75 text-sm mb-1">Budget</p>
                                            <h2 className="text-white text-2xl">$2,440</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-5 col-span-12 md:ms-auto ms-auto me-auto">
                                    <img alt="background" className="-mb-n5 rtl:scale-x-[-1] xl:max-w-[170px] lg:max-w-36 md:max-w-36 max-w-32 lg:ps-4 md:pt-0 pt-6" src="https://matdash-react-tailwind-main.netlify.app/assets/welcome-bg-BCkZs0On.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart iframe */}
                <div className='w-full h-full'>
                    <iframe 
                        className='w-full h-full rounded-xl' 
                        src="https://lookerstudio.google.com/embed/reporting/1uYIXuUFbGwMA8Y8R2JFenPNG3fjuCaGG/page/mpeW"  
                        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    />
                </div>
            </div>
        </div>
    )
}
