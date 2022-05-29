import { Entete } from "./entete.model";
import { Fin } from "./fin.model";
import { CodeErreurRapport } from "./codeErreurRapports.model";

export interface RapportPM {
    entete: Entete;
    numeroDeclaration: any;
    codeEnregistrement: number;
    codeOperation: string;
    typeIdentifiantPersonne?: string;
    numeroIdentifiantPersonne?: string;
    numeroRegistreCommerce?: string;
    matriculeFiscal?: string;
    raisonSocialePM?: string;
    siglePM?: string;
    qualitePM?: string;
    nationalitePM?: string;
    codeTypePM?: number;
    codeFormeJuridique?: string;
    codeActivitePM?: string;
    codeRegime?: number;
    codeSituation?: number;
    dateSituationJuridique?: Date;
    referenceJortSituationJuridique?: string;
    creationPM?: Date;
    referenceJortPM?: string;
    dateEntreExploitation?: Date;
    montantCapitalPM?: number;
    dateFixationCapitalSocial?: Date;

    numeroTelephone1?: string;
    numeroTelephone2?: string;
    numeroFax?: string;
    numeroTelex?: string;
    adresseEmail?: string;
    adresseWebPM?: string;
    fin: Fin;
    codeErreurRapports?: Array<CodeErreurRapport>;

}