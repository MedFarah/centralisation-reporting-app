import { CodeErreurRapport } from "./codeErreurRapports.model";

export interface Entete{
    ndecl: number;
    ktenr: number;
    kte: number;
    ddecl: Date;
    kmdecl: number;
    demiss: Date;
    codeErreurRapports?: any;
}