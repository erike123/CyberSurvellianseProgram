import StepsItem from './StepsItem';


import upload from '../../../assets/upload.svg';
import security from '../../../assets/security.svg';
import report from '../../../assets/report.svg';
import recommendations from '../../../assets/recomendations.svg';

export default function Steps() {
    return(
        <section className="max-container padding flex justify-between max-xl:grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 mt-12">
        <StepsItem imageUrl={upload} text={"Upload Your Smart Contract"} />
        <StepsItem imageUrl={security} text={"Automated Vulnerability Detection"} />
        <StepsItem imageUrl={report} text={"Detailed Security Report"} />
        <StepsItem imageUrl={recommendations} text={"Fix Recommendations & Insights"} />
      </section>
    );
}