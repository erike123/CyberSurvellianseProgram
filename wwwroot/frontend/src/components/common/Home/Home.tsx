import AuditComponent from "../../../sections/AudiPage/AuditComponent";
import Hero from "../../../sections/Hero/Hero";
import Steps from "../Steps/Steps";

export default function Home() {
    return(
        <div>
            <Hero />
            <Steps />
            <AuditComponent />
        </div>
    );
}