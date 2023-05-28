import "../Main/Main.css";

export function Main() {
    return (
        <main>
            <h2>New Entry</h2>
            <form>
                <label htmlFor="motto">Motto</label>
                <input id="motto"></input>
                <label htmlFor="notes">Notes</label>
                <textarea id="notes"></textarea>
            </form>
            <button className="submit__button" type="submit">Create</button>
            <div>
                <p className="entries__count">All Entries #count</p>
                <p className="favorites__count">Favorites #count</p>
            </div>

            <section>
                <p>FEB 27, 2028</p>
                <h2>That is life in the city</h2>
                <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p> foiowcn ofcjwp jp w kpokcpoko k ok pokwodjwo dk pk kookpowco k k owdjvhiwudnk  iwmcwelkcd jow mnjjo wk jowjdkdvkwjv  pwpo kdk d!! {" "}
        </p>
      </section>
      <section>
        <p>FEB 27, 2138</p>
        <h2 className="card__name">"Proficoding"</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>
          Ich bin der allergrößte Codingheld auf der ganzen weiten Welt. Mal
          schauen, ob das Ernst gefällt!{" "}
        </p>
      </section>
      <section>
        <p>FEB 27, 2138</p>
        <h2 className="card__name">"Proficoding"</h2>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#FF4A11"
            stroke="#FF4A11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>
          Ich bin der allergrößte Codingheld auf der ganzen weiten Welt. Mal
          schauen, ob das Ernst gefällt!{" "}
        </p>
            </section>
        </main>
    );
}