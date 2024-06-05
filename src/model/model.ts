export interface Player {
    id: number;
    name: string;
    age?: number;
    grade: string;
    gameCount?: number;
    avatar: string;
    clubId: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface WatingPlayer {
    id:number;
    place:number;
    playerId:number;
    watingPlayer:Player;
    clubId:number;
    club:Club;

}

export interface Club {
    id:number;
    name:string;
    clubMasterId:number;
    clubMaster:Player;
    Members:Player[];
    
}

export interface SendData {
    playerId:number | null;
    place:number;
    clubId:number;
}

export interface PlayerWithPlace extends Player { place: number; }
