import { Entete } from "./entete.model";
import { Fin } from "./fin.model";
import { CodeErreurRapport } from "./codeErreurRapports.model";

export interface RapportPP {
    entete: Entete;
    numeroDeclaration: any;
    codeEnregistrement: number;
    codeOperation: string;
    typeDocument: string;
    numeroDocumentIdentification: string;

    dateDebutDocumentIdentification: Date;
    lieuDelivranceDocumentIdentification: string;

    dateFinValiditeDocumentIdentification: string;

    nomPersonPhysique: string;
    prenomPersonnePhysique: string;
    sexePersonnePhysique: string;
    dateNaissance: Date;
    lieuNaissance: string;
    qualitePersonne: string;
    nationalite: string;
    profession: string;
    etatCivil: string;
    situationJuridique: number;
    dateSituationJuridique: Date;
    numeroTelephone1: string;
    numeroTelephone2: string;
    numeroFax: string;
    numeroTelex: string;
    adresseEmail: string;
    fin?: Fin;
    codeErreurRapports?: Array<CodeErreurRapport>;
}