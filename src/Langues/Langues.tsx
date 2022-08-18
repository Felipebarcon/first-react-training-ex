
const Langues = () => {
    const langues_possibles = [
        {name: "Français", code: "fr", lang: "French"},
        {name: "English", code: "en", lang: "English"},
        {name: "Español", code: "es", lang: "Spanish"}
    ];

    // set langue from navigator
    function setLangue(event:any) {
        localStorage["langue"] = event.target.value;
        window.location.reload();
    }

   // create dropdown list of languages
    function createLangueList() {
        return langues_possibles.map((langue) => {
            // set the selected langue if it is the current langue or if it is the default langue
            const selected = langue.code === localStorage["langue"] || !localStorage["langue"];
            return <option key={langue.code} value={langue.code} selected={selected}>{langue.name}</option>;
        }
        );
    }

    return <select onChange={setLangue}>{createLangueList()}</select>
};

export default Langues;