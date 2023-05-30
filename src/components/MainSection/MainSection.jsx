import "./MainSection.css";
import  Form  from "../Form/Form.jsx";
import  EntryList  from "../EntryList/EntryList.jsx";
import Tabs from "../Tabs/Tabs.jsx";


export default function MainSection() {
    return (
        <div className="main-section">
            <Form />
            <Tabs />
            <EntryList />
        </div>
           );
}