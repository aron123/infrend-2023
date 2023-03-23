import { VersionType } from "./version-type";

export interface ChangelogEntry {
    versionType: VersionType;
    oldValue: number;
    newValue: number;
}