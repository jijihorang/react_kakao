import SampleMenu from "../components/menu/SampleMenu.tsx";

function AboutPage() {

    console.log("=========================");
    console.log(import.meta.env.VITE_API_HOST)

    return (
        <div>
            <SampleMenu></SampleMenu>
            <h1>About Page</h1>
        </div>
    );
}

export default AboutPage;