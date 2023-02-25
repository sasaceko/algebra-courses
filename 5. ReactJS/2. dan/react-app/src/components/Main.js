function Main() {
    const polaznik = {
        ime: "Ivo",
        prezime: "Ivic",
        datumRodenja: "01.01.1990",
        adresa: "Ulica 23",
        grad: "Varazdin",
        formatPrikaza: "tablica",
        imePrezime: function(){return this.ime + " " + this.prezime}
    }

    return (
        <>
            {polaznik.formatPrikaza === "tablica" &&
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Ime prezime</th>
                                <th>Datum rođrenja</th>
                                <th>Adresa</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>{polaznik.imePrezime()}</td>
                                <td>{polaznik.datumRodenja}</td>
                                <td>{polaznik.adresa + ' ' + polaznik.grad}</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </div>
            }
            {polaznik.formatPrikaza === "lista" && 
                <div>
                    <ul>
                        <li>Ime prezime: {polaznik.imePrezime}</li>
                        <li>Datum Rođenja: {polaznik.datumRodenja}</li>
                        <li>Adresa: {polaznik.adresa}</li>
                    </ul>
                </div>
            }
            {polaznik.formatPrikaza !== "lista" && polaznik.formatPrikaza !== "tablica" &&
                <h3>Nije odabran odgovarajući format prikaza</h3>
            }
        </>
    )
}

export default Main;