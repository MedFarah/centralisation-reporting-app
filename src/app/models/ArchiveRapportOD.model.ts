import { Entete } from "./entete.model";
import { Fin } from "./fin.model";
import { CodeErreurRapport } from "./codeErreurRapports.model";
export interface ArchiveRapportOD{
     id:string;
     dateArchive:Date;
    entete: Entete;
    numeroDeclaration: number;
    codeEnregistrement: number;
    codeOperation: string;
    typeIdentifiantClient?: string;
    numIdentifiantClient?: string;
    codeAgenceDeclarant?: number;
    identifiantInterneOperation?: string;
    dateOperation: Date;
    codeTypeOperation?: string;
    codeDevise?: string;
    montantEnDevise?: number;
    montantEnDinar?: number;
    numDeclarationDouane?: string;
    dateDeclarationDouane?: Date;
    montantDeclareEnDouane?: number;
    typeIdentifiantBeneficiairePP?: string;
    numIdentifiantBeneficiairePP?: number;
    typeIdentifiantBeneficiairePM?: string;
    numIdentifiantBeneficiairePM?: number;
    ribBeneficiaire?: string;
    typeCompteBeneficiaire?: string;
    codePaysExpediteurDesFonds?: string;

    fin: Fin;
    codeErreurRapports?: Array<CodeErreurRapport>;
}