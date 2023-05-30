import "./MainSection.css";
import { Form } from "../Form/Form.jsx";
import { EntryList } from "../EntryList/EntryList.jsx";
import { Tabs } from "../Tabs/Tabs.jsx";


export function MainSection() {
    return (
        <div>
            <Form />
            <Tabs />
            <EntryList />
        </div>
           );
}