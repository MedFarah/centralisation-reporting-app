import { Entete } from "./entete.model";
import { Fin } from "./fin.model";
import { CodeErreurRapport } from "./codeErreurRapports.model";

export interface RapportOperationDevise {

    entete: Entete;
    numeroDeclaration: number;
    codeEnregistrement: number;
    codeOperation: string;
    typeIdentifiantClient: string;
    numIdentifiantClient: string;
    codeAgenceDeclarant: number;
    identifiantnumbererneOperation: string;
    dateOperation: Date;
    codeTypeOperation: string;
    codeDevise: string;
    montantEnDevise: number;
    montantEnDinar: number;
    NumDeclarationDouane: string;
    dateDeclarationDouane: Date;
    montantDeclareEnDouane: number;
    typeIdentifiantBeneficiairePP: string;
    numIdentifiantBeneficiairePP: number;
    typeIdentifiantBeneficiairePM: string;
    numIdentifiantBeneficiairePM: number;
    ribBeneficiaire: string;
    typeCompteBeneficiaire: string;
    codePaysExpediteurDesFonds: string;

    fin: Fin;
    codeErreurRapports?: Array<CodeErreurRapport>;
}