/* eslint-disable react/prop-types */
function Layout({children}) {
    return(
        <>
            <div className="bg-black w-max-screen h-screen gap-x-5 grid max-[640px]:grid-cols-4 max-[1024px]:grid-cols-8  min-[1025px]:grid-cols-12">
                {children}
            </div>
        </>
    )
}

export default Layout