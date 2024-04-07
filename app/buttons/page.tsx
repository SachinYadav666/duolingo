import { Button } from "@/components/ui/button";

const buttonsPage = () => { 
    return ( 
    <div className="p-4 space-y-6 flex flex-col max-w-[200px]">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutine"> primary oultine </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutine"> Secondary oultine </Button>
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutine"> Danger oultine </Button>
        <Button variant="super">Super</Button>
        <Button variant="superOutine"> Super oultine </Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutine"> sidebar oultine </Button>
        </div> );
        } ;

        export default  buttonsPage;
