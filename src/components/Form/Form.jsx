import "./Form.css";

export default function Form() {
    return (
<section class="entry-form">
	<form>
		<h2 className="form_title">NEW ENTRY</h2>
        <label htmlFor="motto">Motto</label>
		<input id="motto" placeholder="Write your motttooo..." required></input>
		<label htmlFor="notes">Notes</label>
        <textarea id="notes" placeholder="Write here your notes..." required></textarea>
		<button className="submit_button" type="submit">Create</button>
	</form>
</section>
    );
};