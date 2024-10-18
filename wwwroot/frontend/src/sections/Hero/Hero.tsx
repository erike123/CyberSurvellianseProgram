
import Header from "../../components/shared/Header/Header";
import landingPageImg from '../../assets/landing_page.png';
import Button from "../../components/shared/Button/Button";

export default function Hero() {
    return (
        <section className="max-container relative flex items-center justify-between gap-5 padding">
            <header className="w-[50%] relative max-xl:w-full max-xl:flex max-xl:flex-col max-xl:text-center max-xl:mt-16">
                <div className="flex flex-col gap-14 mb-16">
                    <div className="flex flex-col gap-5">
                        <Header title='Strengthen Your Smart Contracts for ' coloredText="Security and Reliability" coloredClass="primary-header-color" customClass="mb-0 font-black text-4xl" size="text-4xl"/>
                        <p className="text-base max-md:text-sm info-text">Submit your smart contract for a thorough audit and detect common vulnerabilities instantly. Our Web3 platform ensures your code is safe, secure, and ready for deployment.</p>
                    </div>
                    
                    <div className="max-xl:flex max-xl:justify-center">
                        <Button label="Get Started" />
                    </div>
                </div>
                 
                 {/* Decoration 5k+, 4K+ */}
                <div className="flex gap-10 absolute max-xl:hidden">
                    <div className="flex flex-col text-center">
                        <p className="text-4xl font-black text-gray-400">2K</p>
                        <p className="text-gray-400">Users</p>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-4xl font-black text-gray-400">2K+</p>
                        <p className="text-gray-400">Completed Audits</p>
                    </div>
                       <div className="flex flex-col text-center">
                        <p className="text-4xl font-black text-gray-400">128+</p>
                        <p className="text-gray-400">Vulnerabily Cases</p>
                    </div>
                </div>
            </header>


            <div className="relative max-xl:hidden">
                <div className="relative rounded-full w-[600px] h-[600px] overflow-hidden border-8 border-slate-800">
                    <img src={landingPageImg} alt="Landing page" className="w-full h-full object-cover" />
                </div>

            </div>
    

        </section>
    );
}