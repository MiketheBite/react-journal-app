import "./MainSection.css";
import { Form } from "../Form/Form";
import { EntryList } from "../EntryList/EntryList";
import { Tabs } from "../Tabs/Tabs";


export function Main() {
    return (
        <div>
            <Form />
            <Tabs />
            <EntryList />
        </div>
           );
}