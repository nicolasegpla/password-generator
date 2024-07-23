import ButtonGenerator from "../../Components/ButtonGenerator"
import { useEffect } from "react";
import Layout from "../../Layout/Layout"
import { useSelector, useDispatch } from "react-redux";
//import color from '../../assets/color.png'
import '../../App.css'
import { fetchData } from "../../redux/getDataSlice";

function AppUi() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.dataFetchTest);
    

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    console.log(data.data)
    

    return(
        <>
            <Layout>
                <div className={` h-min flex flex-col justify-center items-center text-center col-span-4 min-[641px]:col-span-8 min-[1025px]:col-span-12 pt-16 py-12  color`}>
                    <h1 className="max-[460px]:text-5xl min-[800px]:text-8xl text-white text-6xl font-bold min-[800px]:max-w-2xl max-w-md leading-none	" >Generate your Passwords</h1>
                    <span className="min-[800px]:text-8xl max-[460px]:text-5xl text-6xl font-bold max-w-66 bg-gradient-to-r from-fuchsia-100 to-fuchsia-600 inline-block text-transparent bg-clip-text leading-none	">Now with AI</span>
                    <p className="min-[800px]:text-xl min-[800px]:max-w-md mt-3 mb-8 max-w-xs pt-4 font-normal text-zinc-400">Now you can generate stronger passwords and store them in your password box</p>
                    <ButtonGenerator label={'Generate'} />
                </div>
                <h3>hola</h3>
            </Layout>
        </>
    )
}

export default AppUi