import Container from "@/components/layout/Container";
import PageOne from "./page-One/PageOne";
import { useAppSelector } from "@/redux/hooks";
import PageTwo from "./page-two/PageTwo";
import PageThree from "./page-three/PageThree";

const Hero = () => {
    const activepage = useAppSelector((state) => state.midasStates.page);
    return (
        <div className="flex items-center pt-[250px] flex-col ">
            <Container>{activepage === 1 && <PageOne />}</Container>
            <Container>{activepage === 2 && <PageTwo />}</Container>
            <Container>{activepage === 3 && <PageThree />}</Container>
        </div>
    );
};

export default Hero;
