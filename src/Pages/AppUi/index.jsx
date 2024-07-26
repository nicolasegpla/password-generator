import { useFunctions } from "../../redux/helpers/useFunctions"
import ButtonGenerator from "../../Components/atoms/ButtonGenerator"
import Layout from "../../Layout/Layout"
import '../../App.css'
import FormNewPassword from "../../Components/molecules/FormNewPassword";


function AppUi() {

    const { handleGeneratePassword } = useFunctions();
    
    return(
        <>
            <Layout>
                <div className={` h-min flex flex-col justify-center items-center text-center col-span-4 min-[641px]:col-span-8 min-[1025px]:col-span-12 pt-16 py-12  color`}>
                    <h1 className="max-[460px]:text-5xl min-[800px]:text-8xl text-white text-6xl font-bold min-[800px]:max-w-2xl max-w-md leading-none	" >Generate your Passwords</h1>
                    <span className="min-[800px]:text-8xl max-[460px]:text-5xl text-6xl font-bold max-w-66 bg-gradient-to-r from-fuchsia-100 to-fuchsia-600 inline-block text-transparent bg-clip-text leading-none	">Now with AI</span>
                    <p className="min-[800px]:text-xl min-[800px]:max-w-md mt-3 mb-8 max-w-xs pt-4 font-normal text-zinc-400">Now you can generate stronger passwords and store them in your password box</p>
                    <ButtonGenerator label={'Generate'} fnGeneratorPassword={handleGeneratePassword} />
                    <FormNewPassword position={`col-span-4 min-[641px]:col-span-8 min-[1025px]:col-span-12 mt-12`} />
                </div>
                
            </Layout>
        </>
    )
}

export default AppUi