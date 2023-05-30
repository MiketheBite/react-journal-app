import "./Form.css";

import React from "react";

export default function Form() {
  return (
    <section className="entry-form">
      <form>
        <h2 className="form_title">NEW ENTRY</h2>
        <label htmlFor="motto">Motto</label>
        <input id="motto" placeholder="Write your motto..." required />
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" placeholder="Write your notes..." required />
        <button className="submit_button" type="submit">Create</button>
      </form>
    </section>
  );
}
