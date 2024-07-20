/* eslint-disable react/prop-types */
function Layout({children}) {
    return(
        <>
            <div className="w-max-screen h-screen max-[768px]:mx-4 gap-x-5 grid max-[640px]:grid-cols-4 max-[1024px]:grid-cols-8 max-[1024px]:mx-6 min-[1025px]:grid-cols-12 min-[1025px]:mx-6">
                {children}
            </div>
        </>
    )
}

export default Layout