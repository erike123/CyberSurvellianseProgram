import ProfileItem from "../../common/About/profileItem";

interface CompaniesInterface {
    "companyName": string,
}

export default function Cards({
    companies
}:{
    companies: CompaniesInterface[];
}) {
    return(
        <div className="flex flex-wrap gap-5 justify-center">
            {companies.map((company, index) => (
                <ProfileItem 
                    key={index} 
                    imageUrl="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    name={company.companyName}
                    size={true}
                />
                ))}
        </div>         
    );
}