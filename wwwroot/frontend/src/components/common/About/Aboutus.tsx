import Header from '../../shared/Header/Header';
import data from './index'
import ProfileItem from './profileItem';


export default function Aboutus() {
    return(
        <section className='max-container padding'>
            <Header title={"Meet the Team"} size={"text-2xl"} infoText="Whether you're looking to collaborate, learn, or just say hello, we’re always excited to connect." />
            <div className='flex items-center justify-center min-h-screen'>
                <div className="max-w-6xl text-center w-full padding flex flex-wrap gap-10 justify-center">
                    {data.map((data, index) => (
                    <ProfileItem
                        key={index}
                        name={data.name}
                        imageUrl={data.image}
                        role={data.role}
                        description={data.description}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}