import Vue from 'vue';
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);


const messages = {
    'de': {

        login:{
            header:"Login",
            buttonLabel:"Login",
            customerNumber:{
                label:"Kundennummer",
                hint:"Kundennummer eingeben",
                placeholder:""
            },
            contractNumber:{
                label:"Eine Vertragsnummer",
                hint:"Vertragsnummer eingeben",
                placeholder:""
            },
            pinNumber:{
                label:"PIN-Nummer",
                hint:"PIN-Nummer eingeben",
                placeholder:""
            }



        },
        top_navigation: {
            logout: "Anmeldung"
        },
        user_info: {
            label: "Info: Das Login zum Ausfüllen des untenstehenden Formulars ist nur %{days} Tage gültig."
        },
        contractual_Company: {
            header: "Vertragspartner",
            hint: "Fügen Sie die Steuernummer-ID hinzu",
            companyName: {
                label: "Vertragspartner",

                placeholder: "Given Name"
            },

            taxBusinessId:

            {
                label: "Wirtschafts-Identifikationsnummer (W-IdNr.)",
                hint: "Fügen Sie die W-IdNr hinzu",
                placeholder: "Wirtschafts-Identifikationsnummer (W-IdNr.) hinzufügen"
            },
            taxNumber: {
                label: "Steuernummer",
                hint: "Fügen Sie die Steuernummer hinzu",
                placeholder: "Steuernummer hinzufügen"

            }

        },
        beneficial_owners: {
            header: "Wirtschaftlich Berechtigte",
            hint: "Fügen Sie die Steuer-ID hinzu",
            beneficialOwnerTypeFictive: {
                label: "Fiktiv wirtschaftlich Berechtigte",
                hint: " Die Wirtschafts-Identifikationsnummer (Abk.:\
                    W-IdNr., teilw. auch: WIN) ist in Deutschland \
                    ein eindeutiges und dauerhaftes\
                    Identifikationsmerkmal für Steuerzwecke bei\
                    wirtschaftlich Tätigen."
            },
            beneficialOwnerTypeStandard: {
                label: " Wirtschaftlich Berechtigte",
                hint: " Die Wirtschafts-Identifikationsnummer (Abk.:\
                    W-IdNr., teilw. auch: WIN) ist in Deutschland \
                    ein eindeutiges und dauerhaftes\
                    Identifikationsmerkmal für Steuerzwecke bei\
                    wirtschaftlich Tätigen."
            },
            firstName:

            {
                label: "Vorname",
                /*   hint:"Fügen Sie die W-IdNr hinzu", */
                placeholder: "Vorname hinzufügen"
            },

            lastName:

            {
                label: "Nachname",
                /*   hint:"Fügen Sie die W-IdNr hinzu", */
                placeholder: "Nachname hinzufügen"
            },

            taxId:

            {
                label: "Steuer-ID",
                hint: "Fügen Sie die Steuer-ID hinzu",
                placeholder: "Steuer-ID hinzufügen"
            },

            birthdate:

            {
                label: "Geburtstag",
                /*  hint:"Fügen Sie die Steuer-ID hinzu",  */
                placeholder: "TT.MM.JJJJ"
            },

            streetName:

            {
                label: "Straße",
                /*  hint:"Fügen Sie die Steuer-ID hinzu",  */
                placeholder: "Straße hinzufügen"
            },

            streetNumber:

            {
                label: "Nummer",
                /*  hint:"Fügen Sie die Steuer-ID hinzu",  */
                placeholder: "Nr hinzufügen"
            },
            postcode:

            {
                label: "PLZ",
                /*  hint:"Fügen Sie die Steuer-ID hinzu",  */
                placeholder: "PLZ hinzufügen"
            },

            city:

            {
                label: "Ort",
                /*  hint:"Fügen Sie die Steuer-ID hinzu",  */
                placeholder: "Ort hinzufügen"
            },

            addButton: {
                label: "hinzufügen"
            },
            removeButton: {
                label: "löschen"
            },
            infoButton: {
                label: "Weiteren (fiktiv) wirtschaftlich Berechtigten hinzufügen"
            }


        },

        termConditions: {
            header: "Einwilligung zur Datenübermittlung",
            label:['Hiermit bestätige ich die Richtigkeit und\
            Vollständigkeit der zu übermittelnden Daten. Des Weiteren habe ich die', 
        'Datenschutzhinweise',' gelesen und akzeptiert.']
        },

        logoutButton: {
            label: "Logout"
        },

        saveandLogButton: {
            label: "Absenden und logout"
        },

        modalPopup:{
            labelLogout:['No Data will be saved but re-login is possible !!','Are you sure','?'],
            labelsendLogout:['Data will be transmitted but no re-login is possible !!','Are you sure','?'],
            yesButton:"Yes",
            noButton:"No"
        },

        thanksPage:{
            label:"Vielen Dank. Ihre Daten wurden erfolgreich übermittelt"
        },

        pageNotFound:{
            label:"Seite nicht gefunden"
        }



    },
    'en': {
        top_navigation: {
            logout: "logout"
        },

        info: {
            label: "Info: The login is provided to fill out the form below is valid only for 7 days."
        }
    }
};
export const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages

})