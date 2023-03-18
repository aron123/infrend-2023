import { VersionType } from "./change";

export interface ChangelogEntry {
    version: VersionType;
    oldValue: number;
    newValue: number;
}