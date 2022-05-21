import { CodeErreurRapport } from "./codeErreurRapports.model";

export interface Entete{
    ndecl: number;
    pktenr: number;
    kte: number;
    nddecl: Date;
    pkmdecl: number;
    demiss: number;
    codeErreurRapports?: Array<CodeErreurRapport>;
}