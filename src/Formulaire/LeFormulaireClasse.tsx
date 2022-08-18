import { Component } from 'react';

interface FormulaireProps {}

type hf = 'Homme' | 'Femme';

// Tous les champs du formulaire
interface FormulaireState {
    nom?: string;
    age?: number;
    hf?: hf;
    hobby?: string;
    errors?: {
        nom?: string;
        age?: string;
    };

}

class LeFormulaire extends Component<FormulaireProps, FormulaireState> {
    constructor(props: FormulaireProps) {
        super(props);
        this.state = {
            nom: '',
            age: 0,
            errors: {
                nom: '',
                age: '',
            },
            hf: undefined,
            hobby: "",
        };
        this.changeValue = this.changeValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeValue(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.validate(name, value);
        this.setState({ [name]: value });
    }

    validate(name: string, value: any) {
        let ok = false;
        const copyState = { ...this.state };
        let msg = '';
        switch (name) {
            case 'nom':
                if (value.length <= 10 && value.length >= 0) {
                    ok = true;
                    msg = '';
                } else {
                    // validate errors
                    msg = 'Le nom doit être compris entre 0 et 10 caractères';
                }
                copyState.errors!.nom = msg;
                this.setState(copyState);
                break;
            case 'age':
                if (value >= 0 && value <= 120) {
                    ok = true;
                    msg = '';
                } else {
                    msg = "L'age doit être compris entre 0 et 120 ans";
                }
                copyState.errors!.age = msg;
                this.setState(copyState);
                break;
        }
        return ok;
    }


    submitForm(event: any) {
        // dont submit the form if there are errors
        if (!this.state.errors!.nom && !this.state.errors!.age) {
            // first option to delete the state errors

            // const newState = { ...this.state };
            // delete newState.errors;

            // second option to delete the state errors
            const { errors, ...newstate } = this.state;

            // alert(`Vous avez saisi ${this.state.nom} et ${this.state.age}`);
            alert(JSON.stringify(newstate));
        }
        event.preventDefault();
    }

    createDropDownListFrom(name: string, ...tableau: string[]) {
        return (
            <select name={name} value={this.state.hobby} onChange={this.changeValue}>
                <option key=""></option>
                {tableau.map((h, i) => (
                    <option key={h + i}>
                        {h}
                    </option>
                ))}
            </select>
        );
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                Nom:{' '}
                <input name="nom" value={this.state.nom} onChange={this.changeValue} />{' '}
                {this.state.errors!.nom}
                <br />
                Age:{' '}
                <input
                    name="age"
                    value={this.state.age}
                    onChange={this.changeValue}
                    type="number"
                />
                {this.state.errors!.age}
                <br />
                Homme{' '}
                <input
                    type="radio"
                    name="hf"
                    value="Homme"
                    checked={this.state.hf === 'Homme'}
                    onChange={this.changeValue}
                />
                <br />
                Femme{' '}
                <input
                    type="radio"
                    name="hf"
                    value="Femme"
                    checked={this.state.hf === 'Femme'}
                    onChange={this.changeValue}
                />
                <br />
                Hobby:
                {this.createDropDownListFrom(
                    'hobby',
                    'Sport',
                    'Cinéma',
                    'Lecture',
                    'Jeux',
                    'Autre'
                )}
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default LeFormulaire;
