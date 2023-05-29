export default function Form() {
    return (
<>
<section class="entry-form">
	<form>
        <label htmlFor="motto">Motto</label>
		<input id="motto" placeholder="motttooo" required></input>
		<label htmlFor="notes">Notes</label>
        <textarea id="notes" placeholder="Write here" required></textarea>
		<button type="submit">Submit</button>
	</form>
</section>
</>
    );
};